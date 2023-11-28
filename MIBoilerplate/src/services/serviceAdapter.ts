import { isNetworkConnected } from '@src/utils';

import { API } from './apiHandler';
import { API_METHODS } from './appServices.type';
import { contents } from '../context/content';

export default async function serviceAdapter<T, reqParams>(
  method: API_METHODS,
  url: string,
  requestParam?: reqParams
): Promise<T> {
  const status = await isNetworkConnected();
  if (status) {
    if (method.toString() === API_METHODS.GET) {
      return API.getAPIService(url);
    } else if (method.toString() === API_METHODS.DELETE) {
      return API.deleteAPIService(url, requestParam);
    } else if (method.toString() === API_METHODS.PUT) {
      return API.putAPIService(url, requestParam);
    } else if (method.toString() === API_METHODS.POST) {
      return API.postAPIService(url, requestParam);
    } else {
      return Promise.reject('REST METHOD NOT EXITSt');
    }
  } else {
    return Promise.reject(Error(contents('common.internetConnectionError')));
  }
}
