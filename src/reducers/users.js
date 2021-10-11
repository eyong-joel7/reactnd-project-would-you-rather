import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION, SIGN_UP_REQUEST } from "../actions/users"

export default function users (state = {}, action){
    switch(action.type) {
        case RECEIVE_USERS:
        return {
            ...state,
            ...action.users
        }
        case SAVE_USER_ANSWER: 
        
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                 answers: {
                     ...state[action.authedUser].answers,
                     [action.qid]:action.answer
                 }
            }
        }
        case SIGN_UP_REQUEST:
        return {
            ...state,
            [action.id]:action.user
        }
        case SAVE_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.id])
                }
            }
        default:
            return state
    }
}