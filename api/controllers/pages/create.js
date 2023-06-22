module.exports = {


  friendlyName: 'Create',


  description: 'Create pages.',


  inputs: {
    title: {
      type: 'string'
    },
    hideTitle: {
      type: 'boolean',
      defaultsTo: false
    },
    identifier: {
      type: 'string',
      required: true,
      unique: true
    },
    addButton: {
      type: 'boolean',
      defaultsTo: false
    },
    addLink: {
      type: 'string'
    },
    pathOption: {
      type: 'string'
    },
    backButton: {
      type: 'boolean',
      defaultsTo: false
    },
    component: {
      type: 'ref',
      defaultsTo: []
    },
    serviceUrl: {
      type: 'ref'
    },
    isRedirect: {
      type: 'boolean',
      defaultsTo: false
    },
    redirectOption: {
      type: 'string'
    },
    redirectLink: {
      type: 'string'
    },
    hideSubmitButton: {
      type: 'boolean',
      defaultsTo: false
    },
    listBtn: {
      type: 'ref',
      defaultsTo: []
    },
    onInit: {
      type: 'ref',
      defaultsTo: []
    },
    customToastrMsg: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const dataInput = Object.assign(inputs, {teamId: this.req.session.team.id});
      const page = await Page.create(dataInput).fetch();
      return exits.success({
        id: page.id,
        page: page
      });
    } catch (error) {
      if (error.isOperational) {
        return exits.error(error.raw);
      }
      return exits.error({message: error.message});
    }

  }


};
