import { hideLoading, showLoading } from "react-redux-loading"
import { addUser } from "../utils/api"
import { signIn } from "./authedUser";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function saveUserAnswer ({authedUser, qid, answer}) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function saveQuestionToUser({author, id}){
    return {
        type: SAVE_USER_QUESTION,
        authedUser:author,
        id
    }
}
const signUp  = (info) =>{
    return {
        type: SIGN_UP_REQUEST,
        id: info.id,
        user: info
    }
}

export function handleSignUp(info){
    return async (dispatch) => {
        dispatch(showLoading())
        const user = await addUser(info)
        dispatch(signUp(user))
        dispatch(signIn(user.id))
        dispatch(hideLoading())
    }
}