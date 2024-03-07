<template>
    <h1>Auth View</h1>
    <form action="">
        <input v-model="email" type="text" placeholder="correo">
        <input v-model="password" type="text" placeholder="password">
        <button type="submit" @click.prevent="authUser">Iniciar Sesión</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AuthService from '@/services/AuthService'

let email = ref("")
let password = ref("")

const authUser = async () => {
    const auth = new AuthService()
    const success = await auth.login(email.value, password.value)
    if(success) {
        console.log('login correcto')
    } else {        
        console.log('login incorrecto')
    }
}
</script>