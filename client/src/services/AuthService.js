import axios from 'axios'

const url = 'http://localhost:3000/api/auth/'

class AuthService {
  // login
  static async login(obj) {
    const { username, password } = obj
    const response = await axios.post(url + 'login', {username, password})
    console.log(response)
  }
  // register
  static async register(obj) {
    const { username, password, email } = obj
    const response = await axios.post(url + 'register', {username, password, email})
    console.log(response)
  }
}

export default AuthService;