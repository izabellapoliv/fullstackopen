import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                // console.log('promise fulfilled')
                setNotes(initialNotes)
            })
    }, [])
    // console.log('render', notes.length, 'notes')

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const addNote = event => {
        event.preventDefault()
        // console.log('button clicked', event.target)
        const noteObj = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        }

        noteService
            .create(noteObj)
            .then(newNote => {
                setNotes(notes.concat(newNote))
                setNewNote('')
            })
    }
    const handleNoteChange = event => {
        // console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = id => {
        const note = notes.find(item => item.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(updatedNote => {
                setNotes(notes.map(note =>
                    note.id !== id ? note : updatedNote
                ))
            })
            .catch(error => {
                const msg = `The note '${note.content}' was already deleted from the server`
                setErrorMessage(msg)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(note => note.id !== id))
            })
    }
    const rows = () => notesToShow.map(note =>
        <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
        />
    )

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
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
            <Footer />
        </div>
    )
}

export default App
