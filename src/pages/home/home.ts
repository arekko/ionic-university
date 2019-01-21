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

  media: MediaResponse[] = [];

  async ngOnInit() {
    await this.mediaProvider
      .getAllMedia()
      .subscribe((response: MediaResponse[]) => {
        this.media = response.map((response: MediaResponse) => {
          const ext = "png";
          const filename: string = response.filename.split(".")[0];

          return {
            ...response,
            thumbnails: {
              160: `http://media.mw.metropolia.fi/wbma/uploads/${filename}-tn160.${ext}`,
              320: `http://media.mw.metropolia.fi/wbma/uploads/${filename}-tn320.${ext}`,
              640: `http://media.mw.metropolia.fi/wbma/uploads/${filename}-tn640.${ext}`
            }
          };
        });
        console.log(this.media);
      });
  }

  itemHandle(e) {
    this.photoViewer.show(e);
  }
}
