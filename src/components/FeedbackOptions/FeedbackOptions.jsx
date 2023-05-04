import React, {Component } from 'react';
class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    // console.log(this.props)
    return (
      <div>
        {options.map((btn) => (
          <button key={btn}
            onClick={() => onLeaveFeedback(btn)}
          >
            {btn}</button>)
        )}
      </div>
   
       
    )
  }
}
export default FeedbackOptions;

