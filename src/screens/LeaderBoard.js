import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LeaderCard from "../components/LeaderCard";

class LeaderBoard extends Component {
  render() {
    if (!this.props.authedUser) return <Redirect to="/login" />;
    const { users } = this.props;
    const sortedUserList = [];
    
    for (let key in users) {
      const num_ans = users[key].answers;
      const ans_len = Object.keys(num_ans).length;
      const q_len = Object.keys(users[key].questions).length;
      const total = ans_len + q_len;
      let newObj;
      newObj = {
           id:key,
          num_ans: parseInt(ans_len),
          num_q: parseInt(q_len),
          num_total:parseInt(total),
          avatarURL: users[key].avatarURL,
          name: users[key].name
        };
        sortedUserList.push(newObj)
      };
    sortedUserList.sort((a,b) => b.num_total - a.num_total);

    return (
      <div>
        { sortedUserList.map(user => (
          <LeaderCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
