<template>
    <h1>Auth View con Firebase</h1>
    <form action="">
        <input v-model="email" type="text" placeholder="correo">
        <input v-model="password" type="text" placeholder="password">
        <button type="submit" @click.prevent="authUser">Iniciar Sesión</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from '/firebase/auth'

let email = ref("")
let password = ref("")

const authUser = async () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
        console.log('login correcto')
    }).catch((error) => {
        console.log('login incorrecto')
    })
}
</script>