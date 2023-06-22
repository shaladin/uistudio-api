module.exports = {


  friendlyName: 'Create many',


  description: '',


  inputs: {
    data: {
      type: 'ref',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const dictionary = await Dictionary.createEach(inputs.data).fetch();

      if (!dictionary) {
        return exits.error({message: 'Failed insert data dictionary'});
      }

      return exits.success({message: `${dictionary.length} data dictionary has been inserted.`, data: dictionary});
    } catch (err) {
      return exits.error({message: err.message});
    }

  }


};
