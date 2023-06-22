function transformInput(input, teamId) {

  const result  = [];
  const queries = input['QueryString'];

  Object.keys(queries).forEach(key => {
    var value = queries[key];
    var regex = /([a-zA-Z_.]+) AS ([a-zA-Z_]+)/g;
    var metadata = [];
    var match;
    while ((match = regex.exec(value.select)) !== null) {
      var column = match[1], property = match[2];
      metadata.push({ column: column, property: property });
    }
    if (metadata.length > 0) {
      result.push({
        name: key,
        type: 'querystring',
        metadata: metadata,
        teamId: teamId
      });
    }
  });

  return result;
}


module.exports = {


  friendlyName: 'Querystring',


  description: 'Querystring transform.',


  inputs: {
    req: {
      type: 'ref',
      required: true
    },
    team: {
      type: 'ref'
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const result = transformInput(inputs.req, inputs.team.id);
    // const result = inputs.req['QueryString'];
    return exits.success(result);
  }


};

