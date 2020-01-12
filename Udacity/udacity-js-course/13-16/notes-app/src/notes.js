import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = [];

// Read existing notes from local storage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : []; 
    } catch (e) {
        return []
    }
}

// Save the notes in local storage
const savedNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Expose notes from module
const getNotes = () => notes;

const createNote = () => {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
}

notes = loadNotes();

export { getNotes, createNote }