import React from 'react'

function LeaderCard(props) {
 const {avatarURL, name, num_total, num_ans, num_q} = props.user
    return (
        <div className = 'leader-card'>
            <div className = 'badge'></div>
            <div className = 'col-1'>
                 <img src = {avatarURL} alt = '' />
            </div>
            <div className = 'col-2'>
                <div>
                    <h2>{name}</h2>
                </div>
                 <div style = {{borderBottom: ' 1px solid #f1f1f1',marginBottom: '10px'}}  className ='col-list'>
                     <span>Answered Questions</span>
                     <span>{num_ans}</span>
                 </div>
                 <div className ='col-list'>
                     <span>Created Questions</span>
                     <span>{num_q}</span>
                 </div>
            </div>
            <div className = 'col-3'>
                <div>
                    <span>Score</span>
                </div>
                <div>
                    <span className = 'score'>{num_total}</span>
                </div>

            </div>
            
        </div>
    )
}

export default LeaderCard
