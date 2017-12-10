const _ = require('lodash');

const { GET_ALL_NINJAS, GET_ONE_NINJA, POST_ONE_NINJA } = require('../actions/index');

module.exports = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_NINJAS:
      return _.mapKeys(action.payload.data, '_id');
    case GET_ONE_NINJA:
      return Object.assign({ [action.payload.data._id]: action.payload.data }, state);
    // case POST_ONE_NINJA:
    //   return Object.assign({}, { [action.payload.data._id]: action.payload.data }, state);
    case POST_ONE_NINJA:
      let oldObj = state;
      console.log('oldObj: ', oldObj);
      let newObj = Object.assign({ [action.payload.data._id]: action.payload.data }, state);
      console.log('newObj: ', newObj);
      return newObj;
    default:
      return state;
  }
};
