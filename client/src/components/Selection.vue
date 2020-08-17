<!--
  Selection Component
    Used for <select>...</select> with automatic styling and using emit for
    passing data to the parent 
  Props :
    1. items -> array of string for selection
    2. selectionFor -> string that defines the selection name
  Emits:
    1. @selected -> emits the selected item from the items list
 -->
<template>
  <select
    class="form-control-inline w-100"
    v-model="selectedItem"
    :aria-placeholder="selectionFor"
    @change="selectItem"
  >
    <option value>No Filter</option>
    <option v-for="item in items" :key="item" :value="item" :aria-placeholder="item">{{item}}</option>
  </select>
</template>

<script>
export default {
  props: {
    items: Array,
    selectionFor: String,
  },
  data() {
    return {
      selectedItem: "",
    };
  },
  methods: {
    selectItem() {
      this.$emit("selected", this.selectedItem);
    },
  },
};
</script>

<style>
</style>