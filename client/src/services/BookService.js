import axios from 'axios'

const url = 'http://localhost:3000/api/book/'

class BookService {
  // index
  static async get() {
    return axios.get(url)
  }

  //find
  static async search(obj) {
    const { nama, kode, hardcopy, softcopy, instrumen } = obj
    const searchUrl = nama == null ? `${url}/kode` : `${url}/nama` 
    const res = axios.get(searchUrl, {
      params: {
        nama,
        kode,
        hardcopy,
        softcopy,
        instrumen
      }
    })
    return res
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