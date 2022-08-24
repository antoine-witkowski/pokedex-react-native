import Axios from 'axios';
import {API_URL, API_KEY} from '../config';

class APIRoot {
  path;

  constructor(path) {
    this.path = path;
  }

  api(headers = {}) {
    return Axios.create({
      baseURL: `${API_URL}${this.path}`,
      headers: {
        'Content-Type': 'application/json',
        ...(headers ?? {}),
      },
      params: {
        apiKey: API_KEY,
      },
    });
  }
}

export default APIRoot;
