/**
 * Definition.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'definitions',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      defaultsTo: 'object'
    },
    properties: {
      type: 'ref'
    },
    metadata: {
      type: 'ref'
    },
    teamId: {
      type: 'string',
      required: true
    }
  },
  customToJSON: function () {
    return _.omit(this, ["teamId"]);
  },

};

