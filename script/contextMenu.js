Array.prototype.upload = function() {
  window.localStorage.setItem("notes", JSON.stringify(this));
  return this;
};
export default class ContextMenu {
  constructor(notes) {
    this.x = 0;
    this.y = 0;
    this.note = undefined;
    this.dom = document.querySelector(".contextMenu");
    this.notes = notes;
    this.bookmarkDIV = this.dom.querySelector("#bookmark");
    this.bookmarkDIV.addEventListener("click", () => {
      this.note.marked = !this.note.marked;
      this.note.marked
        ? document.getElementById(this.note.id).classList.add("marked")
        : document.getElementById(this.note.id).classList.remove("marked");
      this.notes.upload();
      this.updateBookmark();
    });
    this.checkboxDIV = this.dom.querySelector("#checkbox");
    this.checkboxDIV.addEventListener("click", () => {
      this.note.checked = !this.note.checked;
      document
        .getElementById(this.note.id)
        .querySelector(".checkbox").src = this.note.checked
        ? "../assets/check_box-24px.svg"
        : "../assets/check_box_outline_blank-24px.svg";
      this.note.checked
        ? document.getElementById(this.note.id).classList.add("checked")
        : document.getElementById(this.note.id).classList.remove("checked");
        this.updateCheckbox()
      this.notes.upload();
    });
    // closing contextMenu
    window.addEventListener("click", e => {
      const element = e.target;
      if (
        !element.classList.contains("more") &&
        element !== this.dom &&
        element.parentNode !== this.dom &&
        element.parentNode.parentNode !== this.dom
      )
        this.display(false);
    });
  }
  // update labels
  updateBookmark = () =>
    (this.bookmarkDIV.querySelector("img").src = this.note.marked
      ? "../assets/bookmark-24px.svg"
      : "../assets/bookmark_border-24px.svg");
  updateCheckbox = () =>
    (this.checkboxDIV.querySelector("img").src = this.note.checked
      ? "../assets/check_box-24px.svg"
      : "../assets/check_box_outline_blank-24px.svg");
  update(note) {
    this.note = note;
    this.dom.hidden = false;
    this.dom.style.cssText = `--x:${this.x - 200}; --y:${this.y - 74}`;
    this.updateBookmark();
    this.updateCheckbox()
  }
  // display menu
  display(status) {
    status
      ? this.dom.classList.remove("hidden")
      : this.dom.classList.add("hidden");
  }
}
