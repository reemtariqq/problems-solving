var magazine = ['give', 'me', 'one', 'grand', 'today', 'night']
var note = ['give', 'one', 'grand', 'today']
console.log(checkMagazine(magazine, note))

function checkMagazine(magazine, note) {
    magazine.forEach(item => {
        if (note.indexOf(item) !== -1) {
            var index = note.indexOf(item)
            note.splice(index, 1)
        }
    });
    return note.length === 0 ? 'Yes' : 'No'
}
