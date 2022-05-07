const fs = require("fs");
const path = require("path");

// function for creating notes 
function createNote(body, storedNotes) {
    const note = body;
    storedNotes.push(note); //pushing notes to storage 

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: storedNotes
        }, null, 2)
    )

    return note;
}

// function for deleting notes 
function deleteNote(storedNotes, id) {
    let deleteNoteID = parseInt(id);
    storedNotes.splice(deleteNoteID, 1);

    // re-indexing ID of notes in storage 
    for (let i = deleteNoteID; i < storedNotes.length; i++) {
        storedNotes[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: storedNotes
        }, null, 2)
    )
}


// exports the modules 
module.exports = {
    createNote,
    deleteNote
};