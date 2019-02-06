import axios from 'axios';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_POST = "CREATE_POST";
export const UPDATING = "UPDATING";
export const UPDATE_POST = "UPDATE_POST";

export const signIn = signinInfo => dispatch => {
    axios
    .post('https://backend-art.herokuapp.com/api/login', signinInfo)
    .then(res => { 
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        dispatch({type: SIGN_IN, payload: res});
     })
     .catch(err => console.log(err))
}

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    dispatch({type: SIGN_OUT});
}

export const createAccount = accountInfo => dispatch => {
    axios
    .post('https://backend-art.herokuapp.com/api/register', accountInfo)
    .then(res => console.log(res))
}

export const createPost = post => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export const updating = formId => {
    return {
        type: UPDATING,
        payload: formId
    }
}
export const updatePost = post => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}


