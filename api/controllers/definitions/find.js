module.exports = {


  friendlyName: 'Find',


  description: 'Find definitions.',


  inputs: {
    req: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (_, exits) {

    try {
      const params = Object.assign(this.req.body, {teamId: this.req.session.team.id});
      const result = await Definition.find(params);
      return exits.success({data: result, count: result.length});
    } catch (e) {
      return exits.error({message: e.message});
    }

  }


};
