<script setup>
import { ref } from 'vue'
import ToDoForm from "../../src/components/ToDoForm.vue";
const emitted = ref("")

</script>

<template>
    <ToDoForm @todo-added="(e) => emitted += e" />
    <p id="testHarnessOutput">todo-added: {{ emitted }}</p>
</template>
