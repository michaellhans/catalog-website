import axios from 'axios';

const url = 'http://localhost:3000/api/book/';

class BookService {
  // index
  static async get(params) {
    return axios.get(url, {
      params,
    });
  }

  //find
  static async search(book) {
    let { query, searchBy, hardcopy, softcopy, instrumen, page } = book;
    // bila softcopy dan hardcopy false, maka jadi null aja
    if (hardcopy === false) {
      hardcopy = null;
    }
    if (softcopy === false) {
      softcopy = null;
    }
    const searchUrl = `${url}/${searchBy}`;
    const params = {
      hardcopy,
      softcopy,
      instrumen,
      [searchBy]: query,
      page,
    };
    const res = axios.get(searchUrl, {
      params,
    });
    return res;
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
