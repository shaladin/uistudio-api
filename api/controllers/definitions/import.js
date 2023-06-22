module.exports = {


  friendlyName: 'Import',


  description: 'Import definitions.',


  inputs: {
    req: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (_, exits) {

    const body = this.req.body;
    const team = this.req.session.team;

    try {
      const transform = await sails.helpers.transform.querystring(body, team);
      const definitions = await Definition.createEach(transform).fetch();
      return exits.success({data: definitions, count: definitions.length});
    } catch (e) {
      return exits.error({message: e.message});
    }

  }


};
