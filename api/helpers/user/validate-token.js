const jwt = require('jsonwebtoken');
const farmhash = require('farmhash');

module.exports = {


  friendlyName: 'Validate token',


  description: 'Validate jwt token authenticated user',


  inputs: {
    token: {
      type: 'string',
      description: 'Current authenticated user token.',
      required: true
    }
  },


  exits: {

    success: {
      description: 'User token is valid.',
    },

    error: {
      description: 'User token is invalid.',
    },

  },


  fn: async function (inputs, exits) {
    jwt.verify(inputs.token, sails.config.jwtSecret, {}, (err, tokenData) => {
      if (err) {
        return exits.error({error: err.name, message: err.message});
      }

      return User.findOne({email: tokenData.id})
        .exec((error, user) => {
          if (error) {
            return exits.error(error);
          }

          const passwordHash = farmhash.hash32(user.password);
          if (tokenData.pwh !== passwordHash) { // Old token, built with inactive password
            return exits.error('inactive_token');
          }

          return exits.success(user);
        });
    });
  }


};

