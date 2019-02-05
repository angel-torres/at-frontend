export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_POST = "CREATE_POST";

export const signIn = (loginInfo) => ({type: SIGN_IN, payload: loginInfo})

export const signOut = () => ({type: SIGN_OUT})

export const createAccount = accountInfo => {
    return {
        type: CREATE_ACCOUNT,
        payload: accountInfo}
}

export const createPost = post => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

