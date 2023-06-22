module.exports = async function (req, res, proceed) {
  const token  = req.headers.token;

  if (req.headers && !token) {
    return res.badRequest({message: 'Token header was not found'});
  }

  try {
    const team = await Team.findOne({token: token});

    if (!team) {
      return res.status(401).json({message: 'Access denied!'});
    }

    req.session.team  = team;
    // req.session.token = team.token;
    return proceed();
  } catch (e) {

    if (e.isOperational) {
      return res.status(401).json(e.raw);
    }

    console.log('error', e);
    return res.status(400).json({message: e.message});
  }
};
