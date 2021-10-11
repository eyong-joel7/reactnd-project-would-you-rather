import React, { Component, Fragment } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";
import { LoadingBar } from "react-redux-loading";

class UnAnsweredQuestion extends Component {
  state = {
    value: 'optionOne',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
 handleSubmit = (e) => {
   e.preventDefault();
   const {qid} = this.props
   const answer = this.state.value;
   this.props.dispatch(handleSaveQuestionAnswer({qid,answer}))

 }
  render() {
    const {optionOne, optionTwo } = this.props;
    return (
      <Fragment>
        <LoadingBar/>
      <div className="unanswered_poll_view">
        <h1>Would You Rather</h1>
        <RadioGroup
          aria-label="gender"
          value={this.state.value}
          onChange={this.handleChange}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value='optionOne'
            control={<Radio />}
            label={optionOne.text}
          />
          <FormControlLabel
            value='optionTwo'
            control={<Radio />}
            label={optionTwo.text}
          />
        </RadioGroup>
        <button onClick = {this.handleSubmit} className="btn">Submit</button>
      </div>
      </Fragment>
    );
  }
}

export default connect()(UnAnsweredQuestion);
