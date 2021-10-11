export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function updateQuestionAnwser({qid, answer}) {
    return {
        type: UPDATE_QUESTION_ANSWER,
        qid,
        answer,
    }
}

export function saveNewQuestion(question){
    return {
        type: SAVE_NEW_QUESTION,
        question,
    }
}