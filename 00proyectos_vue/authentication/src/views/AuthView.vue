<template>
    <h1>Auth View</h1>
    <form action="">
        <input v-model="email" type="text" placeholder="correo">
        <input v-model="password" type="text" placeholder="password">
        <button type="submit">Iniciar Sesión</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let email = ref("")
let password = ref("")
</script>