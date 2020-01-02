const newNoteContainer = document.querySelector("#newNote");
const searchNoteINPUT = document.querySelector("#searchNote");
const allNotes = document.querySelector("#notes");
const noNotesFoundLI = document.querySelector("#noNotesFound");
const notes = JSON.parse(window.localStorage.getItem("notes")) || [];
if (notes.length > 0) notes.forEach(note => newNote(note));
const updateNotes = () =>
  window.localStorage.setItem("notes", JSON.stringify(notes));
newNoteContainer.querySelector("button").addEventListener("click", function() {
  notes.push({
    content: newNoteContainer.querySelector("input").value,
    id: notes.length,
    checked: false
  });
  newNoteContainer.querySelector("input").value = "";
  newNote(notes[notes.length - 1]);
  updateNotes();
});
let searchMode = false;
searchNoteINPUT.addEventListener("keyup", searchNote);
function newNote(note) {
  const newNoteLI = document.createElement("li");
  newNoteLI.id = note.id;
  const checkboxINPUT = document.createElement("input");
  checkboxINPUT.type = "checkbox";
  checkboxINPUT.checked = note.checked || false;
  checkboxINPUT.addEventListener("click", function() {
    newNoteLI.classList.toggle("checked");
    note.checked = !note.checked;
    updateNotes();
  });
  if (note.checked) newNoteLI.classList.add("checked");
  const span = document.createElement("span");
  span.textContent = note.content;
  newNoteLI.appendChild(span);
  newNoteLI.appendChild(checkboxINPUT);
  allNotes.appendChild(newNoteLI);
}
function searchNote() {
  const content = searchNoteINPUT.value.trim();
  let identifiedElements = notes
    .map(note => {
      if (note.content.toLowerCase().includes(content.toLowerCase()))
        return note.id.toString();
    })
    .filter(n => n != undefined);
  identifiedElements =
    identifiedElements.length === 0 ? ["noNotesFound"] : identifiedElements;
  allNotes.querySelectorAll("li").forEach(li => {
    if (!identifiedElements.includes(li.id)) li.hidden = true;
    else li.hidden = false;
  });
}