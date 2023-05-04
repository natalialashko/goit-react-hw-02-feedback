import React from 'react';
import FeedbackApplication from './FeedbackApplication/FeedbackApplication';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <FeedbackApplication/> 
    </div>
  );
};
