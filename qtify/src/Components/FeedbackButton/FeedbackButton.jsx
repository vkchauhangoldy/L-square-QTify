import React from 'react'
import './FeedbackButton.css'

const Feedback = ({ onFeedbackButtonClick }) => {
  return (
    <div className='feedback'>
      <h3 onClick={onFeedbackButtonClick}>Give Feedback</h3>
    </div>
  );
}

export default Feedback