const fs = require('fs');

module.exports = {


  friendlyName: 'Index',


  description: 'Index mock.',


  inputs: {
    req: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (_, exits) {

    let rawData = fs.readFileSync('./mock/data.mock.json');
    return exits.success(JSON.parse(rawData));

  }


};
