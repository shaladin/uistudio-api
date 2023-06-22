const jsonFile = require('jsonfile');

module.exports = {


  friendlyName: 'Json',


  description: 'Json export.',


  inputs: {
    team: {
      type: 'ref',
      required: true
    },
    type: {
      type: 'string',
      defaultsTo: 'pages'
    },
    json: {
      type: 'ref',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    await sails.helpers.fs.mkdir('./dist/273723287/pages');
    // const file   = `./dist/pages/77836483/${inputs.identifier}.json`;
    // const result = await jsonFile.writeFileSync(file, inputs.json);
    return exits.success({result: true});
  }


};

