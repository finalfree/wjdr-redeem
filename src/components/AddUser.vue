<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const userID = ref('')
const name = ref('')
const level = ref(1)

const addUser = async () => {
  await axios.post('http://localhost:8080/users', {
    id: Number(userID.value),
    name: name.value,
    level: level.value,
  })
  name.value = ''
  level.value = 1
}
</script>

<template>
  <div>
    <h1>Add User</h1>
    <form @submit.prevent="addUser">
      <div>
        <label for="id">User ID:</label>
        <input id="user-id" v-model="userID" type="text" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" required />
      </div>
      <div>
        <label for="level">Level:</label>
        <input id="level" v-model="level" type="number" min="1" required />
      </div>
      <button type="submit">Add User</button>
    </form>
  </div>
</template>
