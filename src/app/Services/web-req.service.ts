import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebReqService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    console.log(`${this.ROOT_URL}/${uri}`);
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  signup(firstName: string, lastName: string, userName: string, contact: number, email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/signup`,
      { firstName, lastName, userName, contact, email, password },
      { observe: 'response' });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, { email, password }, { observe: 'response' });
  }
}
