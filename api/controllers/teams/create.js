module.exports = {


  friendlyName: 'Create',


  description: 'Create teams.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'string'
    },
  },


  exits: {
    teamNameAlreadyInUse: {
      statusCode: 400,
      description: 'Team name already in use',
    }
  },


  fn: async function (inputs, exits) {

    try {
      let newTeam = await Team.create({
        name: inputs.name,
        description: inputs.description
      }).fetch();
      return exits.success({
        message: `Team ${newTeam.name} has been successful created.`,
        data: newTeam
      });
    } catch (e) {
      if (e.code === 'E_UNIQUE') {
        return exits.teamNameAlreadyInUse({
          message: `Oops, ${inputs.name} already exist!`
        });
      }

      return exits.error({
        message: e.message
      });
    }

  }


};
