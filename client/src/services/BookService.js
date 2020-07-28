import axios from 'axios'

const url = 'http://localhost:3000/api/book/'

class BookService {
  // index
  static async get() {
    return axios.get(url)
  }

  // insert
  static async add(song) {
    return axios.post(url, song);
  }

  // delete
  static async delete(song, id) {
    return axios.delete(url + id);
  }
}

export default BookService;