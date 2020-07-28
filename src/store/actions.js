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
      dispatch(getOwnGoals(res.body));
  })
  .catch(e=>{
    console.log(e);
  });
}

export const postOwnGoalsAPI = object => dispatch =>{
  superagent
  .post(`${API}/goals`)
  .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
  .send(object)
  .then(res=>{
      dispatch(postOwnGoals(res.body));
  })
  .catch(e=>{
    console.log(e);
  });
}

export const updateOwnGoalsAPI = (id,object) => dispatch =>{
  superagent
  .put(`${API}/goals/${id}`)
  .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
  .send(object)
  .then(res=>{
    dispatch(updateOwnGoals(res.body));
  })
  .catch(e=>{
    console.log(e);
  });
}

export const deleteOwnGoalsAPI = id => dispatch =>{
  superagent
  .delete(`${API}/goals/${id}`)
  .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
  .then(res=>{
    dispatch(deleteOwnGoals(res.body));
  })
  .catch(e=>{
    console.log(e);
  });
}

export const progressAPI = () => dispatch =>{
  superagent.get(`${API}/goals/progress`)
  .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
  .then(data => {
    console.log(data.body);
    dispatch(progress(data.body))
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

export const postOwnGoals = payload => {
  return {
    type: 'POSTGOALS',
    payload: payload
  }
}

export const updateOwnGoals = payload => {
  return{
    type: 'UPDATEMYGOALS',
    payload: payload
  }
}

export const deleteOwnGoals = payload => {
  return{
    type: 'DELETEMYGOALS',
    payload: payload
  }
}

export const progress = payload => {
  return{
    type: 'PROGRESS',
    payload: payload
  }
}
