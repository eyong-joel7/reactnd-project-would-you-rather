import { _createAccount, _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export function saveQuestionAnswer(response){
return _saveQuestionAnswer(response)
  }

  export function saveQuestion(question){
    return _saveQuestion(question)
  }

  export function addUser(info){
return _createAccount(info);
  }