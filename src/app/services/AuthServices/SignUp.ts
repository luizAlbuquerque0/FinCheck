import { httpClient } from "../HttpClient";

export interface signupParams {
  name: string;
  email: string;
  password: string;
}

interface signUpResponse {
  accessToken: string;
}

export async function signup(params: signupParams) {
  const { data } = await httpClient.post<signUpResponse>('/auth/signup', params);

  return data;
}
