import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BtnFeedbackOptions, SectionOption } from './FeedbackOptions.styled'

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    // console.log(this.props)
    return (
      <SectionOption>
        {options.map((btn) => (
          <BtnFeedbackOptions key={btn}
            onClick={() => onLeaveFeedback(btn)}
          >
            {btn}</BtnFeedbackOptions>)
        )}
      </SectionOption>
   
       
    )
  }
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback:PropTypes.func
}