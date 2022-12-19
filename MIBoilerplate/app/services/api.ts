import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';
import { PackagesListRes, packageObj } from './models/packagesListRes';

const API_URL = Config.API_URL;

class APIhandler {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
    });
  }

  getAllTodos = async (): Promise<packageObj[]> => {
    try {
      const response = await this.axios.get<PackagesListRes>(
        'search?text=scope:mindinventory'
      );
      return response.data.objects;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

const API = new APIhandler();
export default API;
