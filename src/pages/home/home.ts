import { MediaResponse } from "../../interfaces/media";
import { MediaProvider } from "./../../providers/media/media";
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
    public http: HttpClient,
    private mediaProvider: MediaProvider
  ) {}

  media: any = [];

  async ngOnInit() {
    await this.mediaProvider
      .getAllMedia()
      .subscribe((response: MediaResponse[]) => {
        this.media = response.map(response => ({
          ...response,
          thumbnailUrl: `http://media.mw.metropolia.fi/wbma/uploads/${
            response.filename
          }`
        }));
        console.log(this.media);
      });
  }

  itemHandle(e) {
    this.photoViewer.show(e);
  }
}
