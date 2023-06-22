const fs = require('fs');

module.exports = {


  friendlyName: 'Export',


  description: 'Export pages.',


  inputs: {
    identifier: {
      type: 'string'
    },
    json: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const filePath = './dist/hello_world.txt';

    // Set the appropriate headers for the response
    this.res.set({
      'Content-Disposition': 'attachment; filename="hello_world.txt"',
      'Content-Type': 'text/plain'
    });

    // Create a read stream to the file
    const fileStream = fs.createReadStream(filePath);

    // Pipe the file stream to the response
    fileStream.pipe(this.res);
  }

};
