import { FreeCodeCampUser } from './free-code-camp-user';

export interface FreeCodeCampUserResponse {
  entities: {
    user: {
      [key: string]: FreeCodeCampUser;
    };
  };
}
