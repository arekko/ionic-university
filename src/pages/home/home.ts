import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { NavController } from "ionic-angular";
import { Observable } from "rxjs";
import { MediaResponse } from "../../interfaces/media";
import { PlayerPage } from "../player/player";
import { MediaProvider } from "./../../providers/media/media";
import { UploadPage } from "./../upload/upload";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient,
    private mediaProvider: MediaProvider
  ) {}

  public mediaFilePath = "http://media.mw.metropolia.fi/wbma/uploads";
  picArray: Observable<MediaResponse[]>;

  async ionViewDidEnter() {
    this.getAllFiles();
  }

  getAllFiles() {
    this.picArray = this.mediaProvider.getAllMedia();
    console.log('get all');
    
  }

  itemHandle(e) {
    // console.log(this.media);

    const url = `http://media.mw.metropolia.fi/wbma/uploads/${e}`;
    this.photoViewer.show(url);
  }

  showUploadPage() {
    this.navCtrl.push(UploadPage);
  }

  showPlayerPage(fileId) {
    console.log(fileId);
    this.navCtrl.push(PlayerPage, {
      fileId: fileId
    });
  }

  async doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    await this.getAllFiles();

    refresher.complete();
    console.log("End of async operation", refresher);
  }
}
