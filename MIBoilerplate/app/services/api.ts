import {constants} from 'app-constants';
import axios, {AxiosInstance} from 'axios';

import {PackageObj, PackagesListRes} from './models/packagesListRes';

const {BASE_URL} = constants;
const API_URL = BASE_URL;

class APIhandler {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
    });
  }

  getAllPackages = async (): Promise<PackageObj[]> => {
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
