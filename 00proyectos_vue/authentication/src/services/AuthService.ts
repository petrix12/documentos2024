import { Ref, ref } from 'vue'

class AuthService {
    private jwt: Ref<String>
    private error: Ref<String>
    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(): Ref<String> {
        return this.jwt
    }

    getError(): Ref<String> {
        return this.error
    }

    async login(email: String, password: String): Promise<boolean> {
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
            if('errors' in response) {
                this.error.value = "Login failed"
                return false
            }
            this.jwt.value = response.data.access_token
            return true
        } catch(error) {
            console.log(error)
            this.error.value = "Login failed"
            return false
        }
    }
}
export default AuthService