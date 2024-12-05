import { LoginResult } from '@src/services/models/login';

import { LoginResponseDTO } from '../../dtos/UserResponseDTO';

export class PostLoginCommercialResponseAdapter {
  constructor() {}

  service(dto: LoginResponseDTO): LoginResult {
    return {
      userToken: dto.token,
    };
  }
}
