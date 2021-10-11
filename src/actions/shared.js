import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import {receiveQuestions, saveNewQuestion, updateQuestionAnwser} from './questions'
import {receiveUsers, saveQuestionToUser, saveUserAnswer} from './users'


export function handleInitialData(){
return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
    })
}
}

export function handleSaveQuestionAnswer(response){
    return (dispatch, getState) => {
        const {authedUser} = getState();
        const {qid, answer} = response; 
        dispatch(saveUserAnswer({authedUser, qid, answer}))
        dispatch(updateQuestionAnwser({qid, answer}))
        return saveQuestionAnswer({authedUser, qid, answer})
    }
}

export function handleSaveQuestion(question){
    return async (dispatch, getState) => {
const {authedUser} = getState();
dispatch(showLoading())
const {optionTwoText, optionOneText} = question
        const formattedQuestion = await saveQuestion({ optionOneText, optionTwoText, author: authedUser })
        dispatch(saveQuestionToUser(formattedQuestion))
        dispatch(saveNewQuestion(formattedQuestion))
        return dispatch(hideLoading())
    }
}