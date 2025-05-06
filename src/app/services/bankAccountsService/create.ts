import { httpClient } from "../HttpClient";

export interface bankAccountParams {
  name : string;
  initialBalance : number;
  color : string;
  type : 'CHECKING' | 'INVESTMNET' | 'CASH';
}

export async function create(params: bankAccountParams) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
