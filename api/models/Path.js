/**
 * Path.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'paths',
  attributes: {
    path: {
      type: 'string',
      required: true
    },
    environment: {
      type: 'string',
      required: true
    },
    parameter: {
      type: 'ref',
      required: true
    },
    teamId: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },
  customToJSON: function () {
    return _.omit(this, ["teamId"]);
  },

};

