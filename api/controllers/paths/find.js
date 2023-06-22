module.exports = {


  friendlyName: 'Find',


  description: 'Find paths.',


  inputs: {
    req: {
      type: 'ref'
    }
  },


  exits: {
    notFound: {
      statusCode: 404,
      description: 'Path not found'
    }
  },


  fn: async function (_, exits) {

    try {
      const params = Object.assign(this.req.body, {teamId: this.req.session.team.id});
      const paths  = await Path.find(params);

      if (!paths) {
        return exits.notFound({message: 'Paths with search criteria not found!'});
      }

      return exits.success({data: paths, count: paths.length});
    } catch (e) {
      return exits.error({message: e.message});
    }

  }


};
