import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  get token(): string {
    return localStorage.getItem('auth_token') as string;
  }

  set token(value: string) {
    localStorage.setItem('auth_token', value);
  }
}
