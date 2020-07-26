import superagent from 'superagent'; 
import cookie from 'react-cookies';

const API = process.env.REACT_APP_API; 


// API Functions 
export const getRemoteData =() => dispatch => {

  return superagent.get(`${API}/motivation`)
  .then(data => {
    // console.log(data.body);
    dispatch(getAction(data.body))
  });
}

export const postRemoteData = (data) => dispatch => {
  superagent
  .post(`${API}/motivation`)
  .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
  .send(data)
  .then(res =>{
    dispatch(postAction(res.body))
  })
  .catch(e=>{
    console.log(e);
  });
}

export const getOwnGoalsAPI = () => dispatch =>{
  superagent
  .get(`${API}/goals/mine`)
  .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
  .then(res=>{
      console.log(res.body);
      dispatch(getOwnGoals(res.body));
  })
  .catch(e=>{
    console.log(e);
  });
}



// Function Methods
export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}

export const postAction = payload => {
  return {
    type: 'POST',
    payload: payload
  }
}

export const getOwnGoals = payload => {
  return {
    type: 'MYGOALS',
    payload: payload
  }
}
