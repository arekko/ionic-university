import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MediaResponse } from "../../interfaces/media";
import {
  LoginResponse,
  LoginUser,
  RegisterResponse,
  RegisterUserData
} from "../../interfaces/user";
import { CurrentUserResponse } from "./../../interfaces/user";

@Injectable()
export class MediaProvider {
  constructor(public http: HttpClient) {}

  isLoggedIn: boolean = false;

  public BASE_URL: string = "http://media.mw.metropolia.fi/wbma";

  getAllMedia(): Observable<MediaResponse[]> {
    return this.http.get<MediaResponse[]>(`${this.BASE_URL}/media`);
  }

  getSingleMedia(id: number): Observable<MediaResponse> {
    return this.http.get<MediaResponse>(`${this.BASE_URL}/media/${id}`);
  }

  login(userData: LoginUser): Observable<LoginResponse | any> {
    return this.http.post<LoginResponse | any>(
      `${this.BASE_URL}/login`,
      userData
    );
  }

  register(data: RegisterUserData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.BASE_URL}/users`, data);
  }

  getCurrentUser(): Observable<CurrentUserResponse> {
    const token = localStorage.getItem("login");
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": token
      })
    };
    if (token) {
      return this.http.get<CurrentUserResponse>(
        `${this.BASE_URL}/users/user`,
        httpOptions
      );
    }
  }
}
