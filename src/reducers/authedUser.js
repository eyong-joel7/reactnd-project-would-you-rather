import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST} from "../actions/authedUser";

export default function authedUser(state = null, action) {
switch(action.type){
    case SIGN_IN_REQUEST: 
    return action.authedUser

    case SIGN_OUT_REQUEST: 
    return null

    default: 
    return state;
}
}