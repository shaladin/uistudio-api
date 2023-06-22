module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Authenticated user credential',
    },
    notFound: {
      statusCode: 404,
      description: 'Instance object not found',
    },
    invalidPassword: {
      statusCode: 401,
      description: 'You have entered an invalid password',
    }
  },


  fn: async function (inputs, exits) {

    try {
      const user = await User.findOne({email: inputs.email});
      await sails.helpers.passwords
        .checkPassword(inputs.password, user.password)
        .intercept('incorrect', (error) => {
          exits.invalidPassword({message: error.message});
        });

      const token = await sails.helpers.user.generateToken(user);
      return exits.success({
        message: `${user.email} is logged in`,
        data: user,
        token: token
      });
    } catch (e) {
      sails.log.error(e);

      return exits.error({
        message: `Error logging in user ${inputs.email}`,
        error: e.message
      });
    }

  }

};
