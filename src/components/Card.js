import React from 'react'


const Card = (props) => {
   const {avatarURL, name, text} = props;
    return (
        <div className = 'card'>
            <div className = 'card-header'>
                <h2 className = 'card-h2'>{text}</h2>
            </div>
            <div className = 'card-body'>
                <div className = 'card-image'>
                    <img src ={avatarURL}  alt = {name}/>
                </div>
                 <div className = 'card-content'>
                     {
                         props.children
                     }
                </div>
            </div>
            
        </div>
    )
}


export default Card;
