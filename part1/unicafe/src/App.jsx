import { useState } from 'react'

const Title = (props) => <h2>{props.text}</h2>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = ({total, good, neutral, bad}) => {
  if (total > 0) {
    return (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={total} />
            <StatisticsLine text="average" value={(good - bad) / total} />
            <StatisticsLine text="positive" value={`${((good / total) * 100).toFixed(2)} %`} />
          </tbody>
        </table>
    )
  }

  return <div>No feedback given</div>
}

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <Title text="give feedback"/>
      <Button handleClick={() => {
        setGood(good + 1)
        setTotal(total + 1)
          }} text="good"/>

      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
          }} text="neutral"/>

      <Button handleClick={() => {
        setBad(bad + 1)
        setTotal(total + 1)
          }} text="bad"/>

      <Title text="statistics"/>

      <Statistics total={total} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App