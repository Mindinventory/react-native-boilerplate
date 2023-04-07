import { API_METHODS } from './appServices.type';
import { ServicesEndPoints } from './appServicesEndPoints';
import { GetUserCommercialResponseAdapter } from './commercial/adapters/response/getUserCommercialResponseAdapter';
import { UserResponseDTO } from './commercial/dtos/UserResponseDTO';
import { ListUserReq, LoginParams, LoginResult, UserResult } from './models';
import serviceAdapter from './serviceAdapter';

export class AppServices {
  constructor() {}

  loginUser = async (loginParams: LoginParams): Promise<LoginResult> => {
    return new Promise((resolve, reject) => {
      serviceAdapter<LoginResult, LoginParams>(
        API_METHODS.POST,
        ServicesEndPoints.LOGIN,
        loginParams
      )
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  listUsers = async (listUserReq: ListUserReq): Promise<UserResult[]> => {
    return new Promise((resolve, reject) => {
      serviceAdapter<UserResponseDTO, ListUserReq>(
        API_METHODS.GET,
        `${ServicesEndPoints.USERS}?page=${listUserReq.page}&per_page=${listUserReq.per_page}`
      )
        .then(res => {
          resolve(new GetUserCommercialResponseAdapter().service(res));
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

export const appServices = new AppServices();
