import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'

 class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionTwoText, optionOneText} = this.state;
        this.props.dispatch(handleSaveQuestion({optionOneText, optionTwoText}))
        this.setState({
            optionOneText:'',
            optionTwoText:''
        }, () =>  this.props.history.push('/'))

    }
    render() {
        const {optionTwoText, optionOneText} = this.state
        return (
            <div>
            <div className = 'new-card'>
                <div className = 'card-header'>
                    <h2>Create New Question</h2>
                </div>
                <div>
                    <p>Complete the question</p>
                    <form onSubmit = {this.handleSubmit}>
                        <h3>Would you rather ...</h3>
                        <input className = 'inout' type = 'text' placeholder = 'Enter Option One Text Here' required value = {optionOneText} onChange = {({target:{value}}) => this.setState((prevState) => ({...prevState, optionOneText:value})) }  />
                            <div className = 'line'>
                            <span className = 'hr'></span>
                            <span className = 'or'>OR</span>
                            <span className = 'hr'></span>
                                </div>
                        <input className = 'inout' type = 'text' placeholder = 'Enter Option One Text Here' required value = {optionTwoText} onChange = {({target:{value}}) => this.setState((prevState) => ({...prevState, optionTwoText:value})) } />
                        <button className = 'btn' type =  'submit'>Submit</button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)