import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Card from './Card'

const Poll = (props) => {
   const {text, id, author}  = props;
   const {users} = props;

const authorKey = Object.keys(users).find(key => author === key);

const {name, avatarURL} = users[authorKey];
    return (
        <Card avatarURL = {avatarURL} name = {name} text ={`${name} asks`} >
            <Fragment>
            <h2 className = 'card-h2'>Would You Rather</h2>
            <p>{`...${text.substr(0,15)}...`}</p>
                     <Link to = {{pathname:`/questions/${id}`, state:{
                       name,
                       avatarURL
                     }}} className = 'card-btn'> View Poll</Link>
            </Fragment>
        </Card>
    )
}

function mapStateToProps({users},{question}){
const {optionOne:{text}, id, author}  = question;
return {
    id,
    author,
    text,
    users,
}
}

export default connect(mapStateToProps)(Poll)
