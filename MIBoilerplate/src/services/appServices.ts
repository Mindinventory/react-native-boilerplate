import {ServicesEndPoints} from './appApiEndPoints';
import {API_METHODS} from './appServices.type';
import {ApiUserResponse, ListUserReq, UserResponse} from './models';
import serviceAdapter from './serviceAdapter';

export class AppServices {
  constructor() {}

  listUsers = async (
    listUserReq: ListUserReq
  ): Promise<Array<UserResponse>> => {
    return new Promise((resolve, reject) => {
      serviceAdapter<ApiUserResponse, ListUserReq>(
        API_METHODS.GET,
        ServicesEndPoints.USERS,
        listUserReq
      )
        .then(res => {
          const data: Array<UserResponse> = res.data.map(item => {
            return {
              first_name: item.first_name,
              id: item.id,
              last_name: item.last_name,
            };
          });

          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

export const appServices = new AppServices();
