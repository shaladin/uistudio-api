/**
 * Dictionary.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'dictionary',
  attributes: {
    property: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },

};

