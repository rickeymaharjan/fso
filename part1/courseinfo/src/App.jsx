const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]} exercises={props.exercises[0]}/>
      <Part part={props.part[1]} exercises={props.exercises[1]}/>
      <Part part={props.part[2]} exercises={props.exercises[2]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.parts[0] + props.parts[1] + props.parts[2]}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total parts={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
