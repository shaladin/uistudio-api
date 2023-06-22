module.exports = {


  friendlyName: 'Detail',


  description: 'Detail pages.',


  inputs: {
    identifier: {
      type: 'string'
    }
  },


  exits: {
    notFound: {
      statusCode: 404,
      description: 'Page was not found'
    }
  },


  fn: async function (inputs, exits) {

    try {
      const criteria = Object.assign(inputs, {teamId: this.req.session.team.id});
      const page = await Page.findOne(criteria);

      if (!page) {
        return exits.notFound({message: `Page with identifier ${inputs.identifier} was not found`});
      }

      return exits.success(page);
    } catch (e) {
      if (e.isOperational) {
        return exits.error(e.raw);
      }

      return exits.error({message: e.message});
    }

  }


};
