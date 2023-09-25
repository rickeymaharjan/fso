import { useState } from 'react'

const Title = (props) => <h2>{props.text}</h2>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {((good - bad)/total)}</p>
      <p>postive {(good/total) * 100} %</p>
    </div>
  )
}

export default App