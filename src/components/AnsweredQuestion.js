import React from 'react'

function AnsweredQuestion(props) {
    const { optionOne, optionTwo,response } = props;

    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length

    const optionOneVotePercentage = Math.round((optionOneVotes / totalVotes) * 100);
    const optionTwoVotePercentage = Math.round((optionTwoVotes / totalVotes) * 100);


    return (
        <div className = 'column'>
            <h1>Results:</h1>
            <div className = 'inner-card'>
            <div style = {{display: response==='optionOne' ? 'flex' : 'none'}} className = 'your-vote'>your vote</div>
                <h4 style ={{fontWeight: response==='optionOne'? '200' : 'bold'}}>{`Would you rather ${optionOne.text}?`}</h4>
                <div className = 'progress-wrapper'>
                   <div className = 'progress-bar' style = {{width: `${optionOneVotePercentage}%`}}>
                      <span> {`${optionOneVotePercentage}%`} </span>
                   </div>
                </div>
                <p className = 'vote-text' >{`${optionOneVotes} out of ${totalVotes} votes`}</p>
            </div>
            <div className = 'inner-card'>
                <div style = {{display: response==='optionTwo'? 'flex' : 'none'}} className = 'your-vote'>your vote</div>
                <h4 style ={{fontWeight: response==='optionTwo'? '200' : 'bold'}}>{`Would you rather ${optionTwo.text}?`}</h4>
                <div className = 'progress-wrapper'>
                   <div className = 'progress-bar' style = {{width: `${optionTwoVotePercentage}%`}}>
                     <span> {`${optionTwoVotePercentage}%`}</span>
                   </div>
                </div>
                <p className = 'vote-text'>{`${optionTwoVotes} out of ${totalVotes} votes`}</p>
            </div>
        </div>
    )
}

export default AnsweredQuestion
