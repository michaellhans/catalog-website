import axios from 'axios';

const url = 'api/book/';

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
    const searchUrl = `${url}/${searchBy}`;
    const params = {
      instrumen,
      [searchBy]: query,
      page,
    };
    // bila softcopy dan hardcopy false, maka jadi null aja
    if (hardcopy === true) {
      params.hardcopy = true;
    }
    if (softcopy === true) {
      params.softcopy = true;
    }
    console.log(params);
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
