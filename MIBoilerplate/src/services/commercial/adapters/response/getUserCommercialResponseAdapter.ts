import { UserResult } from '@src/services/models/user';

import { UserResponseDTO } from '../../dtos/UserResponseDTO';

export class GetUserCommercialResponseAdapter {
  constructor() {}

  service(dto: UserResponseDTO): UserResult[] {
    return dto.data.map(item => {
      return {
        firstName: item.first_name,
        id: item.id,
        lastName: item.last_name,
      };
    });
  }
}
