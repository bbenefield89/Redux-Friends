// imports
import axios from 'axios';

// actions types
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIEND = 'GET_FRIEND';
export const ERROR = 'ERROR';

// action descriptions
// getFriends
export const getFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
      axios.get('http://localhost:5000/api/friends')
        .then(({ data }) => {
          dispatch({
            type: GET_FRIENDS,
            payload: data
          });
        })
        .catch(err => {
          console.log('ERR', err)
          dispatch({
            type: ERROR,
            payload: err
          });
        })
  };
};

export const getFriend = id => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios.get(`http://localhost:5000/api/friends/${ id }`)
      .then(({ data }) => {
        dispatch({
          type: GET_FRIEND,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        })
      });
  };
};