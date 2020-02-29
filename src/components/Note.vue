<template>
  <div class="note neomorphism" :class="{ checked: note.checked }">
    <i
      class="material-icons"
      @click="
        note.checked = !note.checked;
        $emit('watch');
      "
      >{{ note.checked ? "check_box" : "check_box_outline_blank" }}</i
    >
    <input
      class="content"
      v-model="note.content"
      placeholder="Edit note here"
      @keyup="$emit('watch')"
    />
    <i class="material-icons" @click="$emit('delete')">delete</i>
  </div>
</template>
<script>
export default {
  name: "Note",
  props: ["note"]
};
</script>
<style scoped>
.note {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0px;
  box-shadow: #000000 4px 4px 8px, #4d4d4d -4px -4px 8px;
  background: #262626;
  transition: 200ms;
  color: white;
  justify-content: space-between;
}
input {
  margin-right: 10px;
}
.note.checked .content {
  text-decoration: line-through;
}

.checked input {
  text-decoration: line-through;
}
</style>
