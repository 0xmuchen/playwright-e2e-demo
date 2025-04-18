import { RequestHolder } from './requestHolder';
import type { LoginResponse, UserCreateRequest, UserCreatedResponse } from '../models/api-models/models';
import { env } from '../env';
import { step } from '../misc/reporters/step';

export class AuthController extends RequestHolder {
  @step()
  async login(data: { email: string; password: string }): Promise<LoginResponse> {
    const loginResponse = await this.request.post(`${env.API_URL}users/login`, {
      data
    });
    return loginResponse.json() as Promise<LoginResponse>;
  }

  @step()
  async register(data: UserCreateRequest): Promise<UserCreatedResponse> {
    const resp = await this.request.post(`${env.API_URL}users/register`, {
      data
    });
    return (await resp.json()) as Promise<UserCreatedResponse>;
  }
}
