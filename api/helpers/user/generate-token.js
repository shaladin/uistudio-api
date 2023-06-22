const jwt = require('jsonwebtoken');
const farmhash = require('farmhash');

module.exports = {


  friendlyName: 'Generate token',


  description: 'Generate jwt token authenticated user',


  inputs: {
    user: {
      type: 'ref',
      description: 'Current authenticated user.',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Well done, success generated jwt token.',
    },

  },


  fn: async function (inputs, exits) {
    // Password hash helps to invalidate token when password is changed
    const passwordHash = farmhash.hash32(inputs.user.password);

    const payload = {
      id: inputs.user.email,
      pwh: passwordHash
    };

    const token = jwt.sign(
      payload,
      sails.config.jwtSecret,
      {
        expiresIn: '24h'
      }
    );

    return exits.success(token);
  }


};

