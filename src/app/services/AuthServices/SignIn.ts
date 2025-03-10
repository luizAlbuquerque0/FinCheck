import { httpClient } from "../HttpClient";

export interface signInParams {
  email: string;
  password: string;
}

interface signInResponse {
  accessToken: string;
}

export async function signIn(params: signInParams) {
  const { data } = await httpClient.post<signInResponse>('/auth/signin', params);

  return data;
}
