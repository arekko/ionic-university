import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MediaResponse } from "../../interfaces/media";
import {
  LoginResponse,
  LoginUser,
  RegisterResponse,
  RegisterUserData,
  User
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

  _getHeaderWithToken(): object | null {
    const token = localStorage.getItem("token");
    let options: object | null = null;

    if (token) {
      options = {
        headers: new HttpHeaders({
          "x-access-token": token
        })
      };
    }
    return options;
  }

  getUserInfo(userId): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": localStorage.getItem("token")
      })
    };
    return this.http.get<User>(`${this.mediaApi}/users/${userId}`, httpOptions);
  }

  getAllMedia(start): Observable<MediaResponse[]> {
    return this.http.get<MediaResponse[]>(
      `${this.mediaApi}/media?start=${start}`
    );
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

  // Requset list of file of current user

  getCurrentUserFiles(): Observable<MediaResponse[]> {
    if (this._getHeaderWithToken()) {
      return this.http.get<MediaResponse[]>(
        `${this.mediaApi}/media/user`,
        this._getHeaderWithToken()
      );
    }
  }

  deleteFileById(fileId: string) {
    console.log(fileId);

    if (this._getHeaderWithToken()) {
      return this.http.delete(
        `${this.mediaApi}/media/${fileId}`,
        this._getHeaderWithToken()
      );
    }
  }
}
