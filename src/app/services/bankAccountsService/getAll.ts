import { httpClient } from "../HttpClient";

type BankAccountResponse = Array<{
id: string;
name: string;
initialBalance: number;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  color: string;
  currentBalance: number;
}>

export async function getAll() {
  const { data } = await httpClient.get<BankAccountResponse>('/bank-accounts');

  return data;
}
