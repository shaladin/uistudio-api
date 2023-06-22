module.exports = {


  friendlyName: 'Profile',


  description: 'Get Detail Profile user.',


  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    }
  },


  exits: {

    notFound: {
      statusCode: 404,
      description: 'Instance object not found',
    },

  },


  fn: async function (inputs, exits) {

    try {
      const user = await User.findOne({email: inputs.email});

      if (!user) {
        return exits.notFound({message: `An account belonging to email ${inputs.email} was not found`});
      }

      return exits.success({data: user});
    } catch (err) {
      if (err.isOperational) {
        return exits.error({message: err.raw});
      }

      return exits.error({message: err.message});
    }

  }


};
