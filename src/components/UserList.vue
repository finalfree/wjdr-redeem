<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface User {
  id: number
  name: string
  level: number
}

const users = ref<User[]>([])

onMounted(async () => {
  const response = await axios.get('http://localhost:8080/users')
  users.value = response.data
})
</script>

<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - Level: {{ user.level }}</li>
    </ul>
  </div>
</template>
