import React, { Component } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { connect } from "react-redux";
import { signIn } from "../actions/authedUser";
import { Link,Redirect } from "react-router-dom";




class SignIn extends Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    const redirect  = this.props.history.location.search?.split('=')[1];
    event.preventDefault();
    const users = this.props.users;
    const selectedUserKey = Object.keys(users).find(
      (key) => users[key].name === this.state.name
    );
    const user = users[selectedUserKey];
    if (user) {
      this.props.dispatch(signIn(user.id));
      if(redirect) this.props.history.push(`${redirect.trim()}`) 
      else return this.props.history.push('/') 
    }
  };

  handleChange = (event) => {
    this.setState(() => ({
      name: event.target.value,
    }));
  };
  render() {
    const users = this.props.users;
    const {authedUser}  = this.props
if(authedUser) return <Redirect to = '/' />

    return (
      <div className = 'new-card'>
          <div className = 'card-header'>
              <h2>Welcome to the Would You Rather App</h2>
              <p>Please Sign in to continue</p>
          </div>
            <img className = 'img-large' src = '/images/reactredux.jpeg' alt = ''/>
            <p className = 'sign-in'>Sign In</p>
          <div>
          <form
              onSubmit={this.handleSubmit}
              noValidate

            >
              <FormControl sx={{ m: 1, minWidth: 120}}>
                <InputLabel className = 'input-label' sx = {{p: 1}} id="signin">Select user</InputLabel>
                <Select
                className  = 'select'
               
                  labelId="signin"
                  id="select name"
                  value={this.state.name}
                  label="user"
                  onChange={this.handleChange}
                >
                  {Object.keys(users).map((user) => (
                    <MenuItem key={users[user].id} value={users[user].name}>
                      {users[user].name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <button disabled = {this.state.name === ''} className = 'btn' type =  'submit'>Sign In</button>
              <span>New here? <span> <Link to = 'signup'>Create account</Link></span></span>
            </form>
          </div>
         
      </div>
    )
                  }
}

function mapStateToProps({ users,authedUser }) {
  return {
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(SignIn);
