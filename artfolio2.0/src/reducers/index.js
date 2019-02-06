import { 
    SIGN_IN, 
    CREATE_ACCOUNT, 
    CREATE_POST, 
    SIGN_OUT, 
    UPDATING, 
    UPDATE_POST,
    GOT_POSTS
} from '../actions'

const initialState = {
    posts: [],
    token: null,
    username: null,
    formId: '',
    signedIn: false,
    user:  {
        username: '',
        password: '',
        fullName: '',
        email: '',
        userImgUrl: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload.data,
                signedIn: true,
                token: localStorage.token,
                username: localStorage.username,
            }
        case CREATE_ACCOUNT:
            return {
                ...state,
            }
        case CREATE_POST:
            return {
                ...state,
            }
        case SIGN_OUT:
            return {
                ...state,
                token: null,
                username: null,
                user: {
                    username: '',
                    password: '',
                    fullName: '',
                    email: '',
                    userImgUrl: ''
                },
                signedIn: false,
            }
        case GOT_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            }
        case UPDATING:
            return {
                ...state,
                formId: action.payload
            }
        case UPDATE_POST:
            const updatedPost = state.posts.find( post => post.id === action.payload.id);
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state
    }
} 