import axios, {AxiosInstance} from 'axios';
import {TodosRes} from './Models/PostsModel';

const API_URL = 'https://jsonplaceholder.typicode.com/';

class APIhandler {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
    });
  }

  getAllTodos = async (): Promise<TodosRes[]> => {
    try {
      const response = await this.axios.get<TodosRes[]>('todos');
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

const API = new APIhandler();
export default API;
