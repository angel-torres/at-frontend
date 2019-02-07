import axios from 'axios';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_POST = "CREATE_POST";
export const UPDATING = "UPDATING";
export const UPDATE_POST = "UPDATE_POST";
export const GOT_POSTS = "GOT_POSTS";

// /api/users/posts/:id

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

export const getPosts = () => dispatch => {
    axios
    .get(`https://backend-art.herokuapp.com/api/posts`)
    .then(res => dispatch({type: GOT_POSTS, payload: res.data}))
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
    .then(res => (dispatch({type: CREATE_ACCOUNT})))
}

export const createPost = post => dispatch => {
    var token = localStorage.getItem('token')
    var request = { 
        headers: { 
            authorization: token
         }
     }
    axios
    .post(`https://backend-art.herokuapp.com/api/posts`, post, request)
    .then(res => dispatch({type: CREATE_POST}))
    .catch(err => console.log(err))
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


