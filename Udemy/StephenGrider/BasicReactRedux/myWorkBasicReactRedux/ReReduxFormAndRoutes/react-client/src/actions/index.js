const axios = require('axios');

const GET_ALL_NINJAS = 'GET_ALL_NINJAS';
const getAllNinja = () => {
  return (dispatch) => {
    axios
      .get('/api/ninjas')
      .then((ninjas) => {
        dispatch({ type: GET_ALL_NINJAS, payload: ninjas });
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
};

const GET_ONE_NINJA = 'GET_ONE_NINJA';
const getOneNinja = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/ninjas/${id}`)
      .then((ninja) => {
        dispatch({ type: GET_ONE_NINJA, payload: ninja });
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
};

const POST_ONE_NINJA = 'POST_ONE_NINJA';
const postOneNinja = (data, callback) => {
  return (dispatch) => {
    axios
      .post('/api/ninjas', data)
      .then((ninja) => {
        dispatch({ type: POST_ONE_NINJA, payload: ninja });
        callback();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
};

const DELETE_ONE_NINJA = 'DELETE_ONE_NINJA';
const deleteOneNinja = (id, callback) => {
  return (dispatch) => {
    axios
      .delete(`/api/ninjas/${id}`)
      .then((ninja) => {
        dispatch({ type: DELETE_ONE_NINJA, payload: ninja });
        callback();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
};

module.exports = {
  GET_ALL_NINJAS,
  getAllNinja,
  GET_ONE_NINJA,
  getOneNinja,
  POST_ONE_NINJA,
  postOneNinja,
  DELETE_ONE_NINJA,
  deleteOneNinja,
};

