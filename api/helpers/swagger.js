function transformInput(input, teamId) {
  var paths  = input['paths'];
  var result = [];

  Object.keys(paths).forEach((key) => {
    var _a, _b, _c, _d, _e;
    var output = {
      description: '',
      environment: input.info.title,
      path: key,
      parameter: {
        definition: '',
        properties: {},
      },
      teamId: teamId
    };
    var parameters = (_b = (_a = paths[output.path]) === null || _a === void 0 ? void 0 : _a.post) === null || _b === void 0 ? void 0 : _b.parameters;
    output.description = (_d = (_c = paths[output.path]) === null || _c === void 0 ? void 0 : _c.post) === null || _d === void 0 ? void 0 : _d.summary;
    if (parameters) {
      var schema = (_e = parameters.find((param) => { return param.in === 'body'; })) === null || _e === void 0 ? void 0 : _e.schema;
      if (schema && schema.$ref) {
        output.parameter = {};
        output.parameter.definition = schema.$ref.split('/').pop() || '';
        var definition = input.definitions[output.parameter.definition];
        output.parameter.properties = definition.properties;
      }
    }
    result.push(output);
  });
  return result;
}

module.exports = {


  friendlyName: 'Swagger',


  description: 'Swagger transform.',


  inputs: {
    req: {
      type: 'ref'
    },
    session: {
      type: 'ref'
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const result = transformInput(inputs.req, inputs.session.team.id);
    return exits.success(result);
  }


};

