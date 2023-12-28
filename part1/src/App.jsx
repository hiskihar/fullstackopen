import { useState } from 'react'

const StatisticLine = ({text, value, unit}) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value} {unit}</td>
            </tr>
        </tbody>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    if (good <= 0 && neutral <= 0 && bad <= 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <>
            <h1>statistics</h1>
            <table>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={good + neutral + bad} />
                <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
                <StatisticLine text="positive" value={100 * good / (good + neutral + bad)} unit={'%'} />
            </table>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const FeedbackButton = ({ onClick, type, text }) => (
        <button onClick={() => onClick(type)}>
            {text}
        </button>
    );

    const handleFeedback = (type) => {
        switch (type) {
            case 'good':    setGood(    good    + 1 ); break;
            case 'neutral': setNeutral( neutral + 1 ); break;
            case 'bad':     setBad(     bad     + 1 ); break;
            default: break;
        }
    }

    return (
        <div>
            <h1>give feedback</h1>
            <FeedbackButton onClick={handleFeedback} type={'good'}    text={'Good'}/>
            <FeedbackButton onClick={handleFeedback} type={'neutral'} text={'Neutral'}/>
            <FeedbackButton onClick={handleFeedback} type={'bad'}     text={'Bad'}/>
            <Statistics good={good} neutral={neutral} bad={bad} />


        </div>
    )
}

export default App
