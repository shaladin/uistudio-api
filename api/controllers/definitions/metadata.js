module.exports = {


  friendlyName: 'Metadata',


  description: 'Metadata definitions.',


  inputs: {
    req: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (_, exits) {

    try {
      const params   = Object.assign(this.req.body, {teamId: this.req.session.team.id});
      const result   = await Definition.findOne(params);
      let metadata   = [];

      if (result) {
        metadata = result.metadata;
      }

      return exits.success({metadata, count: metadata.length});
    } catch (e) {
      return exits.error({message: e.message});
    }

  }


};
