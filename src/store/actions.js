import superagent from 'superagent'; 
import cookie from 'react-cookies';

const API = process.env.REACT_APP_API; 


export const getRemoteData =() => dispatch => {

    return superagent.get(`${API}/motivation`)
        .then(data => {
            // console.log(data.body);
            dispatch(getAction(data.body))
        });
}

export const postRemoteData = (data) => async dispatch => {
     superagent
                .post(`${API}/motivation`)
                .set('Authorization', 'Bearer ' + cookie.load('gadha-auth'))
                .send(data)
                .then(res =>{
                   dispatch(postAction(res.body))
                })
                .catch(e=>{
                    console.log(e);
                })
}


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
