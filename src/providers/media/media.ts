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

  public mediaApi: string = "http://media.mw.metropolia.fi/wbma";
  public mediaFilePath: string = "http://media.mw.metropolia.fi/wbma/uploads/";

  user: any = null;

  getAllMedia(): Observable<MediaResponse[]> {
    return this.http.get<MediaResponse[]>(`${this.mediaApi}/media`);
  }

  getSingleMedia(id: number): Observable<MediaResponse> {
    return this.http.get<MediaResponse>(`${this.mediaApi}/media/${id}`);
  }

  login(userData: LoginUser): Observable<LoginResponse | any> {
    return this.http.post<LoginResponse | any>(
      `${this.mediaApi}/login`,
      userData
    );
  }

  register(data: RegisterUserData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.mediaApi}/users`, data);
  }

  getCurrentUser(token: string): Observable<CurrentUserResponse> {
    // const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": token
      })
    };
    if (token) {
      return this.http.get<CurrentUserResponse>(
        `${this.mediaApi}/users/user`,
        httpOptions
      );
    }
  }

  getFilesByTag(tag: string) {
    //single file
    return this.http.get<MediaResponse[]>(`${this.mediaApi}/tags/${tag}`);
  }
}
