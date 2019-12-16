import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }, [])
    console.log('render', notes.length, 'notes')

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const addNote = event => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const noteObj = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1
        }

        setNotes(notes.concat(noteObj))
        setNewNote('')
    }
    const handleNoteChange = event => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const rows = () => notesToShow.map(note =>
        <Note key={note.id} content={note.content} />
    )

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default App
