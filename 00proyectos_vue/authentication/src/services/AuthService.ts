import { ref } from 'vue'

class AuthService {
    constructor() {
        this.jwt = ref('')
    }

    getJwt() {
        return this.jwt
    }

    async login(email, password) {
        try {
            const res = await fetch('https://rutaservidor/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })            
            const response = await res.json()
        } catch(error) {
            console.log(error)
        }
    }
}