import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MediaResponse } from "../../interfaces/media";
import { LoginUser, LoginResponse } from "../../interfaces/user";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  constructor(public http: HttpClient) {}

  public BASE_URL: string = "http://media.mw.metropolia.fi/wbma";

  getAllMedia(): Observable<MediaResponse[]> {
    return this.http.get<MediaResponse[]>(`${this.BASE_URL}/media`);
  }

  getSingleMedia(id: number): Observable<MediaResponse> {
    return this.http.get<MediaResponse>(`${this.BASE_URL}/media/${id}`);
  }

  login(userData: LoginUser): Observable<LoginResponse | any> {
    return this.http.post(`${this.BASE_URL}/login`, userData);
  }
}
