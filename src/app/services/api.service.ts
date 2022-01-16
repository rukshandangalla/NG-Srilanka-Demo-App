import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, of } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly authURL: string = 'https://accounts.spotify.com/api/token';
  readonly clientId: string = 'edb380738d534533b45cbda8152d12c3';
  readonly clientSecret: string = '605c1eadd14344e8b6821ba59978895c';

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  get<T>(path: string, params: HttpParams = new HttpParams(), showErrors: boolean = true): Observable<T> {
    return this.httpClient.get<T>(path, { headers: this.setHeaders(), params }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);
        return this.formatErrors(err);
      })
    );
  }

  async getToken() {
    let response = await lastValueFrom(this.httpClient.post<any>(this.authURL, "grant_type=client_credentials", { headers: this.setAuthHeaders() }));
    this.tokenService.token = response.access_token;
  }

  private setHeaders(): HttpHeaders {
    const token = this.tokenService.token;
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  private setAuthHeaders(): HttpHeaders {
    const authHeader = `Basic ` + btoa(`${this.clientId}:${this.clientSecret}`)
    let headers = new HttpHeaders().set('Authorization', authHeader);
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

  private async handleError(err: HttpErrorResponse, showErrors: boolean = true) {
    if (err.status === 401) {
      await this.getToken();
      location.reload();
    }

    return of<any>({ isSuccess: false, error: err });
  }

  private formatErrors(err: HttpErrorResponse) {
    return of<any>(
      {
        isSuccess: false,
        status: err.status,
        message: err.error && err.error.messageDetails ? err.error.messageDetails : 'Error Occured!',
        data: err.error
      });
  }
}
