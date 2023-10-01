const Note = ({note, toggleImportanceOf}) => {
    const importance = note.important ? 'Make not important' : 'Make important'

    return (
        <>
            <li>{note.content}</li>
            <button onClick={toggleImportanceOf}>{importance}</button>
        </>
    )
}

export default Note