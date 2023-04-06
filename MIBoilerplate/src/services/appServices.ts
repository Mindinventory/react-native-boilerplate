import { API_METHODS } from './appServices.type';
import { ServicesEndPoints } from './appServicesEndPoints';
import { GetUserCommercialResponseAdapter } from './commercial/adapters/response/getUserCommercialResponseAdapter';
import { UserResponseDTO } from './commercial/dtos/UserResponseDTO';
import { ListUserReq, UserResult } from './models';
import serviceAdapter from './serviceAdapter';

export class AppServices {
  constructor() {}

  listUsers = async (listUserReq: ListUserReq): Promise<UserResult[]> => {
    return new Promise((resolve, reject) => {
      serviceAdapter<UserResponseDTO, ListUserReq>(
        API_METHODS.GET,
        ServicesEndPoints.USERS,
        listUserReq
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
