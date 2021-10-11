import React, { Component } from "react";
import { ImagesUrl } from "../utils/avatarUrls";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, Redirect } from "react-router-dom";
import { handleSignUp } from "../actions/users";
import { connect } from "react-redux";

 class SignUpPage extends Component {
  state = {
    name: "",
    avatarURL: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { avatarURL, name } = this.state;
    this.props.dispatch(handleSignUp({name, avatarURL}))
    this.setState(
      {
        name: "",
        avatarURL: "",
      },
      () => this.props.history.push("/")
    );
  };
  handleChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      avatarURL: event.target.value,
    }));
  };
  render() {
    const {authedUser}  = this.props
    if(authedUser) return <Redirect to = '/' />
    const { name } = this.state;
    return (
      <div className="new-card">
        <div className="card-header">
          <h2>Create an account</h2>
        </div>
        <form
          className="form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={({ target: { value } }) =>
              this.setState((prevState) => ({ ...prevState, name: value }))
            }
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="signin">Choose your avatar</InputLabel>
            <Select
              labelId="signin"
              id="select name"
              value={this.state.avatarURL}
              label="user"
              onChange={this.handleChange}
            >
              {ImagesUrl.map((url) => (
                <MenuItem key={url._name} value={url._avatarURL}>
                  {url._name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <button className="btn" type="submit">
            Sign Up
          </button>
          <span>Have an account? <span> <Link to = '/login'> Sign In</Link></span></span>
        </form>
      </div>
    );
  }
}
function mapStateToProps({authedUser}){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(SignUpPage)