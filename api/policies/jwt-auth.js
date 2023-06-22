module.exports = async function (req, res, proceed) {
  const token  = req.headers.token;

  if (req.headers && !token) {
    return res.badRequest({message: 'Token header was not found'});
  }

  try {
    req.me = await sails.helpers.user.validateToken(token);
    return proceed();
  } catch (e) {

    if (e.isOperational) {
      return res.status(401).json(e.raw);
    }

    console.log('error', e);
    return res.status(400).json({message: e.message});
  }
};
