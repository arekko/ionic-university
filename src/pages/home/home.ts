import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { NavController } from "ionic-angular";
import { MediaResponse } from "../../interfaces/media";
import { PlayerPage } from "../player/player";
import { MediaProvider } from "./../../providers/media/media";
import { UploadPage } from "./../upload/upload";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  start: number = 0;
  items: MediaResponse[] = [];
  mediaFilePath = "http://media.mw.metropolia.fi/wbma/uploads";

  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient,
    private mediaProvider: MediaProvider
  ) {}

  async ionViewDidEnter() {
    this.getAllFiles();
    this.start = 0;
  }

  getAllFiles() {
    this.mediaProvider.getAllMedia(this.start).subscribe(res => {
      this.items = [...this.items, ...res];
      this.start = this.start + 10;
    });
  }

  showUploadPage() {
    this.navCtrl.push(UploadPage);
  }

  showPlayerPage(fileId) {
    this.navCtrl.push(PlayerPage, {
      fileId: fileId
    });
  }

  async doRefresh(refresher) {
    await this.getAllFiles();
    refresher.complete();
  }

  loadData(event) {
    this.mediaProvider.getAllMedia(this.start).subscribe(res => {
      this.items = [...this.items, ...res];
      this.start = this.start + 10;
      event.complete();
    });
  }
}
