module.exports = {


  friendlyName: 'Sync',


  description: 'Sync paths.',


  inputs: {
    req: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const transform = await sails.helpers.swagger(this.req.body, this.req.session);
      const paths = await Path.createEach(transform).fetch();
      return exits.success({data: paths, count: paths.length});
    } catch (e) {
      return exits.error({message: e.message});
    }

  }


};
