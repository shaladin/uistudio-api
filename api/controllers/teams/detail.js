module.exports = {


  friendlyName: 'Detail',


  description: 'Detail teams.',


  inputs: {
    teamId: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (_, exits) {

    // All done.
    return exits.success({...this.req.session.team});

  }


};
