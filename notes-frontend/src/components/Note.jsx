const Note = ({note, toggleImportanceOf}) => {
    const importance = note.important ? 'Make not important' : 'Make important'

    return (
        <>
            <li className="note">{note.content}
            <button onClick={toggleImportanceOf}>{importance}</button>
            </li>
        </>
    )
}

export default Note