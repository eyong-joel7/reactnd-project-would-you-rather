import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import Card from "./Card";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

class PollDetails extends Component {
  render() {

    const { id } = this.props.match.params;
    const question = this.props.questions[id];

    const { users, authedUser } = this.props;

    if (question) {
      const isAnswered = Object.keys(users[authedUser].answers).find(
        (key) => key === id
      );
      const {optionOne, optionTwo, author} = question;

      const authorKey = Object.keys(users).find((key) => author === key);
      const { name, avatarURL } = users[authorKey];
      const userResponse = users[authedUser].answers[isAnswered];

      return (
        <div className = 'list-card' style = {{border:'none'}}>
          {!!isAnswered ? (
            <Card name={name} avatarURL={avatarURL} text={`Asked by ${name}`}>
              <AnsweredQuestion optionOne={optionOne} optionTwo={optionTwo}   response = {userResponse} />
            </Card>
          ) : (
            <Card name={name} avatarURL={avatarURL} text={`${name} asks`}>
              {
                <UnAnsweredQuestion
                  optionOne={optionOne}
                  optionTwo={optionTwo}
                  qid = {id}
                
                />
              }
            </Card>
          )}
        </div>
      );
    } else return <div>404 | Question not Found</div>;
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(PollDetails);
