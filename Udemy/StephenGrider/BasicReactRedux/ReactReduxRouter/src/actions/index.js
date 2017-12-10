import axios from 'axios';

// const ROOT_URL = `https://reduxblog.herokuapp.com/api/posts?key=123`
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sean0923';

const FETCH_POSTS = 'FETCH_POSTS';
const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

const FETCH_POST = 'FETCH_POST';
const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

const DELETE_POST = 'DELETE_POST';
const deletePost = (id, callback) => {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then((data) => { callback(); })
    .catch((err) => { console.log('err', err)});

  return {
    type: DELETE_POST,
    payload: id
  }
}

const POST_ONE_POST = 'POST_ONE_POST';
const postOnePost = (data, callback) => {
  const request = axios
  .post(`${ROOT_URL}/posts${API_KEY}`, data)
  .then(() => {
    callback();
  });
  return {
    type: POST_ONE_POST,
    payload: request
  }
}


const GET_WITH_THUNK = 'GET_WITH_THUNK';
const getWithThunk = (data, callback) => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return (dispatch) => {
    request.then(({ data }) => {
      console.log('data: ', data);
      
      dispatch({ type: GET_WITH_THUNK, payload: data })
    });
  }
}

module.exports = {
  FETCH_POST,
  FETCH_POSTS,
  POST_ONE_POST,
  DELETE_POST,
  GET_WITH_THUNK,
  fetchPost,
  deletePost,
  fetchPosts,
  postOnePost,
  getWithThunk,
}