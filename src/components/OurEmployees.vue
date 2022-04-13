<template>
  <div>Employees will load here...</div>
  <ul>
    <li v-for="employee in employees">{{ employee.name }}</li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const employees = ref([]);

axios.get("/.netlify/functions/getEmployees").then((response) => {
  employees.value = response.data;
});
</script>

<style lang="scss" scoped></style>
