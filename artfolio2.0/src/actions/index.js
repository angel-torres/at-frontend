export const SIGN_IN = "SIGN_IN";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";

export const signIn = () => ({type: SIGN_IN})

export const createAccount = accountInfo => {
    console.log(accountInfo)
    return {
        type: CREATE_ACCOUNT,
        payload: accountInfo}
}