import axios from 'axios'

const url = 'http://localhost:3000/api/book/'

class BookService {
  // index
  static async get() {
    return axios.get(url)
  }

  //find
  static async search(book) {
    console.log(book)
    const { query, searchBy, hardcopy, softcopy, instrumen } = book
    // bila softcopy dan hardcopy false, maka jadi null aja
    
    const searchUrl = `${url}/${searchBy}` 
    const params = {
      hardcopy,
      softcopy,
      instrumen
    }
    params[searchBy] = query
    const res = axios.get(searchUrl, {
      params
    })
    return res
  }

  // insert
  static async add(song) {
    return axios.post(url, song);
  }

  // delete
  static async delete(id) {
    return axios.delete(url + id);
  }
}

export default BookService;