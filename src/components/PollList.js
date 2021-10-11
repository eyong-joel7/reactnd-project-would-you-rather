import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Poll from "./Poll";

class PollList extends Component {
  state = {
    activeClass: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      activeClass: !prevState.activeClass,
    }));
  };

  getGroupedQuestions = (answers_keys, questions_keys, questions) => {
    let unAnswered_questions_keys = [...questions_keys];
    let answered_questions = [];
    let unAnswered_questions = [];
    for (let a_key = 0; a_key < answers_keys.length; a_key++) {
      unAnswered_questions_keys = [
        ...unAnswered_questions_keys.filter(
          (qKey) => qKey !== answers_keys[a_key]
        ),
      ];
    }
    answered_questions = answers_keys
      ? answers_keys.map((a_key) => questions[a_key])
      : [];

    unAnswered_questions = unAnswered_questions_keys
      ? unAnswered_questions_keys.map((key) => questions[key])
      : [];

    return {
      answered_questions,
      unAnswered_questions,
    };
  };

  render() {
    if(!this.props.authedUser) return <Redirect to  = '/login'/>
    const {
      questions,
      answers,
    } = this.props;
 
    const answers_keys = Object.keys(answers);
    const questions_keys = Object.keys(questions);

    const { answered_questions, unAnswered_questions } =
      this.getGroupedQuestions(answers_keys, questions_keys, questions);

    const activeClass = this.state.activeClass;
    return (
      <div className="list-card">
        <nav className="nav">
          <ul>
            <li
              onClick={activeClass ? () => this.handleClick() : null}
              className={!activeClass ? "activeClass" : "inactive"}
            >
              Unanswered Questions
            </li>
            <li
              onClick={!activeClass ? () => this.handleClick() : null}
              className={activeClass ? "activeClass" : "inactive"}
            >
              Answered Question
            </li>
          </ul>
        </nav>
        {activeClass === false
          ? unAnswered_questions.map((question) => (
              <Poll key={question.id} question  = {question} />
            ))
          : answered_questions.map((question) => (
              <Poll key={question.id} question  = {question} />
            ))}
      </div>
    );
  }
}

function mapStateToProps({users, authedUser, questions }) {
  const answers = users[authedUser]?.answers;
  return {
    questions,
    answers,
    authedUser,
  };
}
export default connect(mapStateToProps)(PollList);
