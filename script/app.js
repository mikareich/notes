Array.prototype.upload = function(){
  window.localStorage.setItem("notes", JSON.stringify(this));
  return this
}


import ContextMenu from "./contextMenu.js";

const searchNoteINPUT = document.querySelector("#searchNote");
const allNotes = document.querySelector("#notes");
const notes = JSON.parse(window.localStorage.getItem("notes")) || [];
const newNoteBTN = document.querySelector("#newNoteBTN");
const newNoteINPUT = document.querySelector("#newNote");
const contextMenu = new ContextMenu(notes)
if (notes.length > 0) notes.forEach(note => newNote(note));
// save notes in localstorage
console.log(notes.upload())
newNoteBTN.addEventListener("click", function() {
  // save note in array
  if (newNoteINPUT.value.trim() === "") return;
  notes.push({
    content: newNoteINPUT.value.trim(),
    id: notes.length,
    checked: false,
    marked: true
  });
  notes.upload()
  newNoteINPUT.value = "";
  newNoteINPUT.focus();
  // display note
  newNote(notes[notes.length - 1]);
  // save note in localstorage
});

function newNote(note) {
  const newNoteLI = document.createElement("li");
  newNoteLI.id = note.id;
  // create note children
  const checkboxIMG = document.createElement("img");
  checkboxIMG.src = note.checked
    ? "../assets/check_box-24px.svg"
    : "../assets/check_box_outline_blank-24px.svg";
  checkboxIMG.classList.add("checkbox");
  checkboxIMG.addEventListener("click", function() {
    newNoteLI.classList.toggle("checked");
    note.checked = !note.checked;
    notes.upload();
    checkboxIMG.src = note.checked
      ? "../assets/check_box-24px.svg"
      : "../assets/check_box_outline_blank-24px.svg";
  });

  if (note.checked) newNoteLI.classList.add("checked");
  if (note.marked) newNoteLI.classList.add("marked")
  const moreIMG = document.createElement("img");
  moreIMG.src = "./assets/more_vert-24px.svg";
  moreIMG.classList.add("more");
  moreIMG.addEventListener("click", function() {
    const { x, y } = this.getBoundingClientRect();
    contextMenu.x = x;
    contextMenu.y = y;
    contextMenu.note = note;
    contextMenu.update(note);
    contextMenu.display(true);
  });
  const span = document.createElement("span");
  span.textContent = note.content;
  // add children
  newNoteLI.appendChild(span);
  newNoteLI.appendChild(checkboxIMG);
  newNoteLI.appendChild(moreIMG);
  // display note
  allNotes.appendChild(newNoteLI);
}
searchNoteINPUT.addEventListener("keyup", searchNote);

function searchNote() {
  const content = searchNoteINPUT.value.trim();
  // search notes
  let identifiedElements = notes
    .map(note => {
      if (note.content.toLowerCase().includes(content.toLowerCase()))
        return note.id.toString();
    })
    .filter(n => n != undefined);
  identifiedElements =
    identifiedElements.length === 0 ? ["noNotesFound"] : identifiedElements;
  allNotes.querySelectorAll("li").forEach(li => {
    // hide all other notes
    if (!identifiedElements.includes(li.id)) li.hidden = true;
    else li.hidden = false;
  });
}