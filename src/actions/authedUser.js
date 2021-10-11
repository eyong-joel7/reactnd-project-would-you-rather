

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST'


export const signIn = (id) => {
    return {
        type: SIGN_IN_REQUEST,
        authedUser: id,
    }
}

export const signOut = () => {
return {
    type: SIGN_OUT_REQUEST
}
}

