import React, { Component } from 'react';
import Notification from 'components/Notification/Notification';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props.stats;

    return (
      <div>
        {total ? (
          <div>
            <p>Good {good} </p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad} </p>
            <p>Total: {total} </p>
            <p>Positive feedback: {positivePercentage} % </p>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Statistics;
