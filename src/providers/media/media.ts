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
import { UsernameAvailability } from "./../../interfaces/user";

@Injectable()
export class MediaProvider {
  constructor(public http: HttpClient) {}

  isLoggedIn: boolean = false;

  public mediaApi: string = "http://media.mw.metropolia.fi/wbma";
  public mediaFilePath: string = "http://media.mw.metropolia.fi/wbma/uploads/";

  user: any = null;

  // get user inforamtion

  getUserInfo(userId) {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": localStorage.getItem("token")
      })
    };
    return this.http.get(`${this.mediaApi}/users/${userId}`, httpOptions);
  }

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

  getFilesByTag(tag: string) {
    //single file
    return this.http.get<MediaResponse[]>(`${this.mediaApi}/tags/${tag}`);
  }

  public checkUsernameAvailability(username: string) {
    let isfree: boolean = false;
    this.http
      .get<UsernameAvailability>(`${this.mediaApi}/users/username/${username}`)
      .subscribe((res: UsernameAvailability) => {
        if (res.available) {
          isfree = true;
        }
      });

    return isfree;
  }
  upload(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": localStorage.getItem("token")
      })
    };
    return this.http.post<LoginResponse>(
      this.mediaApi + "/media",
      data,
      httpOptions
    );
  }

  // upload(data: FormData) {
  //   const token = localStorage.getItem("token");

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "multipart/form-data",
  //       "x-access-token": token
  //     })
  //   };

  //   return this.http.post(`${this.mediaApi}/media`, data, httpOptions);
  // }
}
