import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {handleInitialData} from "./actions/shared";
import SignIn from "./screens/SignInPage";
import LoadingBar from "react-redux-loading";
import Navbar from "./components/Navbar";
import PollList from "./components/PollList";
import PollDetails from "./components/PollDetails";
import NewQuestion from "./screens/NewQuestion";
import LeaderBoard from "./screens/LeaderBoard";
import SignUpPage from "./screens/SignUpPage";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const user = this.props.user;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Navbar user = {user}/>
              <Fragment>
                <Switch>
                <Route path="/" exact component={PollList} />
                <Route path = '/questions/:id' component = {PollDetails}/>
                <Route path = '/add' component = {NewQuestion} />
                <Route path  = '/leaderboard' component = {LeaderBoard} />
                <Route path  = '/signup' component = {SignUpPage} />
                <Route path = '/login' component = {SignIn} />
                <Route component = {() => <div>Error:404 | Page not found</div>} />
                </Switch>
              </Fragment>
            {/* )} */}
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ users, authedUser}) {
  return {
    user: authedUser ? users[authedUser] : null
  };
}
export default connect(mapStateToProps)(App);
