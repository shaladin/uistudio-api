module.exports = {


  friendlyName: 'Index',


  description: 'Index dictionary.',


  inputs: {

  },


  exits: {

  },


  fn: async function (_, exits) {

    try {
      const dictionary = await Dictionary.find({});
      const data = [];
      for (const dict of dictionary) {
        data.push({
          key: dict.property,
          value: dict.description
        });
      }
      return exits.success({data});
    } catch (e) {
      return exits.error({message: e.message});
    }

  }


};
