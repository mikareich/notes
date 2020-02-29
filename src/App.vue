<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <h1>Notes</h1>
    <div class="action">
      <button
        @click="
          addNote();
          search = '';
        "
        class="neomorphism"
      >
        New note
      </button>
      <input
        type="text"
        class="neomorphism"
        placeholder="Search note"
        v-model="search"
      />
    </div>

    <note
      v-for="(note, index) in notes"
      :key="index"
      :note="note"
      @delete="notes.splice(index, 1)"
      v-show="
        search === '' ||
          note.content.toLowerCase().includes(search.toLowerCase())
      "
      @watch="saveNotes()"
    ></note>
    <p v-if="notes.length === 0">You have no notes</p>
    <p v-else>You have {{ notes.length }} notes</p>
  </div>
</template>

<script>
import Note from "./components/Note";
export default {
  name: "App",
  components: {
    Note
  },
  data() {
    return {
      notes: null,
      search: ""
    };
  },
  methods: {
    addNote() {
      let note = { id: this.notes.length || 0, content: "", checked: false };
      this.notes = [...this.notes, note];
      this.saveNotes();
    },
    saveNotes() {
      window.localStorage.setItem("notes", JSON.stringify(this.notes));
    }
  },
  watch: {
    notes: function() {
      this.saveNotes();
    }
  },
  created() {
    this.notes = JSON.parse(window.localStorage.getItem("notes")) || [];
  }
};
</script>

<style lang="css">
html,
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #262626;
  color: white;
}
.action {
  display: flex;
}
input {
  border: none;
  font-size: 11pt;
  font-family: unset;
  outline: none;
  background: transparent;
  color: white;
  padding: 10px 12px;
  width: 100%;
  margin-left: 12px;
}
button {
  border: none;
  font-size: 11pt;
  font-family: unset;
  background: #262626;
  color: white;
  padding: 10px 12px;
  outline: none;
  transform: 200ms;
  width: 100px;
}
.neomorphism {
  box-shadow: #000000 4px 4px 8px, #4d4d4d -4px -4px 8px;
  border-radius: 5px;
}
button.neomorphism:active {
  box-shadow: inset #000000 4px 4px 8px, inset #4d4d4d -4px -4px 8px;
}
</style>
