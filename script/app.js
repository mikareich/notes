import ContextMenu from "./contextMenu.js";

// eslint-disable-next-line no-extend-native
Array.prototype.update = function upload() {
  window.localStorage.setItem("notes", JSON.stringify(this));
  return this;
};

// const searchNoteINPUT = document.querySelector('#searchNote');
const allNotes = document.querySelector("#notes");
const notes = JSON.parse(window.localStorage.getItem("notes")) || [];
// const newNoteBTN = document.querySelector('#newNoteBTN');
// const newNoteINPUT = document.querySelector('#newNote');
const contextMenu = new ContextMenu(notes);
// save notes in localstorage
/* newNoteBTN.addEventListener('click', () => {
  // save note in array
  if (newNoteINPUT.value.trim() === '') return;
  notes.push({
    content: newNoteINPUT.value.trim(),
    id: notes.length,
    checked: false,
    marked: false,
  });
  notes.update();
  newNoteINPUT.value = '';
  newNoteINPUT.focus();
  // display note
  newNote(notes[notes.length - 1]);
  // save note in localstorage
}); */

function newNote(note) {
  // create note children
  const newNoteLI = document.createElement("li");
  newNoteLI.id = note.id;
  newNoteLI.style.cssText = `--x:${note.id * 35}`
  // create header
  const headerDIV = document.createElement("div");
  headerDIV.classList.add("header");
  // create checkbox
  const checkboxIMG = document.createElement("img");
  checkboxIMG.src = note.checked
    ? "../assets/check_box-24px.svg"
    : "../assets/check_box_outline_blank-24px.svg";
  checkboxIMG.classList.add("checkbox");
  checkboxIMG.addEventListener("click", () => {
    newNoteLI.classList.toggle("checked");
    note.checked = !note.checked;
    notes.update();
    checkboxIMG.src = note.checked
      ? "../assets/check_box-24px.svg"
      : "../assets/check_box_outline_blank-24px.svg";
  });
  checkboxIMG.alt = "checkbox";
  if (note.checked) newNoteLI.classList.add("checked");
  if (note.marked) newNoteLI.classList.add("marked");
  // create contextMenu trigger
  const moreIMG = document.createElement("img");
  moreIMG.src = "./assets/more_vert-24px.svg";
  moreIMG.classList.add("more");
  moreIMG.addEventListener("click", function updateContextMenu() {
    const { x, y } = this.getBoundingClientRect();
    contextMenu.x = x;
    contextMenu.y = y;
    contextMenu.note = note;
    contextMenu.update(note);
    contextMenu.display(true);
  });
  moreIMG.alt = "more options";
  // create title
  const titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  titleSpan.textContent = note.title;
  // add childrens to header
  headerDIV.appendChild(titleSpan);
  headerDIV.appendChild(checkboxIMG);
  headerDIV.appendChild(moreIMG);

  // add main container
  const mainSpan = document.createElement("span");
  mainSpan.classList.add("main");
  mainSpan.textContent = note.content;

  // add children
  newNoteLI.appendChild(headerDIV);
  newNoteLI.appendChild(mainSpan);

  // display note
  allNotes.appendChild(newNoteLI);
}
if (notes.length > 0) notes.forEach(note => newNote(note));

/* function searchNote() {
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
searchNoteINPUT.addEventListener("keyup", searchNote);
 */

/* if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
 */
