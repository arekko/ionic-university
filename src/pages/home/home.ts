import { UploadPage } from "./../upload/upload";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { NavController } from "ionic-angular";
import { Observable } from "rxjs";
import { MediaResponse } from "../../interfaces/media";
import { MediaProvider } from "./../../providers/media/media";

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

  async ngOnInit() {
    this.getAllFiles();
  }

  getAllFiles() {
    this.picArray = this.mediaProvider.getAllMedia();
  }

  itemHandle(e) {
    // console.log(this.media);

    const url = `http://media.mw.metropolia.fi/wbma/uploads/${e}`;
    this.photoViewer.show(url);
  }

  showUploadPage() {
    this.navCtrl.push(UploadPage);
  }
}
