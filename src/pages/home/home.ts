import { Media, Files } from "./../../interfaces/media";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient
  ) {}

  configUrl: string = "http://media.mw.metropolia.fi/wbma/media/all";

  ngOnInit() {
    this.fetchData();
  }

  data: Files[] = [];

  async fetchData() {
    await this.http.get<Media>(this.configUrl).subscribe((res: Media) => {
      this.data = res.files;
      console.log(this.data);
    });
  }

  // itemHandle(e) {
  //   this.photoViewer.show(e);
  // }
}
