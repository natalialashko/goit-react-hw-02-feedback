import React,{Component} from 'react';

class Statistics extends Component {
    
    render() {
        const {good,neutral,bad,total, positivePercentage} =this.props.stats

        return (
        <div>
    {
                    (total) ? (
            <div>
            <p>Good {good} </p>
            <p>Neutral: {neutral} </p>
            <p>Bad:  {bad} </p>
            <p>Total: {total} </p>
             <p>Positive feedback:  {positivePercentage} % </p>               
            </div>)
            : (<p>There is no feedback</p>)
                }
        </div>
    )
       
    }
}

 export default Statistics;