import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  constructor(public http: HttpClient) {}

  public BASE_URL: string = "http://media.mw.metropolia.fi/wbma/media";

  getAllMedia() {
    return this.http.get(this.BASE_URL);
  }
}
