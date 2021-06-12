const notesJSON = require("./db.json");

//Stores notes

class Store {

    read() {
        return notesJSON;
    };
    addNote(note){
    const length = notesJSON.push(note);
    return length -1;
    };
};

module.exports = new Store();
