import React, {Component } from 'react';
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from 'components/Section/Section';

class FeedbackApplication extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
  };
  handleFeedback = (type) => {
    console.log(type)
    this.setState((prevState) => ({[type]:prevState[type] + 1}))
  }
  countTotalFeedback = (good, neutral, bad) => {
      return good+neutral+bad
    }
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let total = good + neutral + bad;
    return (
       total === 0 ? 0 : ((good / total) * 100).toFixed(0)
      )
    }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const options = ['good', 'neutral', 'bad'];
    const positivePercentage = this.countPositiveFeedbackPercentage(good, neutral, bad);
   
    return (
      <div>
        
        <Section title="Please leave feedback">
        <FeedbackOptions options={ options } onLeaveFeedback={this.handleFeedback.bind(this)}  />
        </Section>
        <Section title="Statistics">
        <Statistics stats={{ good, neutral, bad, total, positivePercentage }} />
        </Section>
     </div>
        
      )
    
  }
};

export default FeedbackApplication;
