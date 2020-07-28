import axios from 'axios'

const url = 'http://localhost:3000/api/song/'

class SongService {
  // index
  static async get() {
    return axios.get(url)
  }

  //find
  static async search(obj) {
    const res = axios.get(`${url}/nama`, {
      params: obj
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

export default SongService