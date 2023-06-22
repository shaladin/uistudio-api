module.exports = {


  friendlyName: 'Revoke',


  description: 'Revoke token.',


  inputs: {
    teamId: {
      type: 'string',
      required: true
    }
  },


  exits: {
    teamNotFound: {
      statusCode: 404,
      description: 'Team not found.'
    }
  },


  fn: async function (inputs, exits) {

    try {
      const token = await sails.helpers.strings.random('alphanumeric', 64);
      const team  = await Team.update({id: inputs.teamId}).set({token: token}).fetch();

      console.log('team', team);

      if (team.length === 0) {
        return exits.teamNotFound({message: `Team with Id: ${inputs.teamId} was not found.`});
      }

      return exits.success({data: team});
    } catch (err) {
      return exits.error({message: err.message});
    }

  }


};
