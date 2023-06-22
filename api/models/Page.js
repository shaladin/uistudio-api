/**
 * Page.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'pages',
  attributes: {
    title: {
      type: 'string'
    },
    hideTitle: {
      type: 'boolean',
      defaultsTo: false
    },
    identifier: {
      type: 'string',
      required: true
    },
    teamId: {
      type: 'string',
      required: true
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
  customToJSON: function () {
    return _.omit(this, ["teamId"]);
  },

};

