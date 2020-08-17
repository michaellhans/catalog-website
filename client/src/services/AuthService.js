import axios from 'axios';

const url = 'http://localhost:3000/api/auth/';

class AuthService {
  // login
  static async login({ username, password }) {
    try {
      const response = await axios.post(
        url + 'login',
        { username, password },
        { withCredentials: true }
      );
      return response; //OK response means the user is logged in
    } catch (error) {
      throw new Error('Credentials false');
    }
  }

  static async logout() {
    const response = await axios.post(url + 'logout');
    return response;
  }

  // register
  static async register({ username, password, email }) {
    try {
      const response = await axios.post(url + 'register', {
        username,
        password,
        email,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getAuthStatus() {
    const resp = await axios.get(url + 'user', { withCredentials: true });
    return resp;
  }
}

export default AuthService;
