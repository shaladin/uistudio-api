/**
 * Team.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'teams',
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'string'
    },
    token: {
      type: 'string'
    }
  },
  beforeCreate: async function (values, proceed) {
    // Generate random token
    values.token = await sails.helpers.strings.random('alphanumeric', 64);
    return proceed();
  },

};

