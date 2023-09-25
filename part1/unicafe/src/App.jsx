import { useState } from 'react'

const Title = (props) => <h2>{props.text}</h2>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const DisplayStatistics = ({total, good, neutral, bad}) => {
  if (total > 0) {
    return (
      <>
        <Statistics text="good" value={good}/>
        <Statistics text="neutral" value={neutral}/>
        <Statistics text="bad" value={bad}/>
        <Statistics text="all" value={total}/>
        <Statistics text="average" value={(good - bad) / total}/>
        <Statistics text="postive" value={(good / total) * 100 + " %"}/>
      </>

    )
  }

  return <div>No feedback given</div>
}

const Statistics = (props) => <div>{props.text} {props.value}</div>

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

      <DisplayStatistics total={total} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App