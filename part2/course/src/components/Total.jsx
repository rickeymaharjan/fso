const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((accumulator, current) => accumulator + current)
    return <p><strong>total of {total} exercises</strong></p>
}

export default Total