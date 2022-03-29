import axios, { AxiosResponse } from "axios";

export class ApiService {
  static async get<T>(href: string): Promise<AxiosResponse<T>> {
    const response = axios.get(href);
    return response;
  }
}
