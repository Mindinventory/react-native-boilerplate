import {ServicesEndPoints} from './appApiEndPoints';
import {API_METHODS} from './appServices.type';
import {ApiUserResponse, ListUserReq} from './models';
import serviceAdapter from './serviceAdapter';

export class AppServices {
  constructor() {}

  listUsers = async (listUserReq: ListUserReq): Promise<ApiUserResponse> => {
    return new Promise((resolve, reject) => {
      serviceAdapter<ApiUserResponse, ListUserReq>(
        API_METHODS.GET,
        ServicesEndPoints.USERS,
        listUserReq
      )
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

export const appServices = new AppServices();
