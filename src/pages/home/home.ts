import { MediaResponse } from "../../interfaces/media";
import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

  picArray: Observable<MediaResponse[]>;

  async ngOnInit() {
    this.getAllFiles();

    // await this.mediaProvider
    //   .getAllMedia()
    //   .subscribe((response: MediaResponse[]) => {
    //     response.map(async item => {
    //       await this.mediaProvider
    //         .getSingleMedia(item.file_id)
    //         .subscribe((res: MediaResponse) => {
    //           this.media.push(res);
    //         });
    //     });
    //   });
  }

  getAllFiles() {
    this.picArray = this.mediaProvider.getAllMedia();
  }

  itemHandle(e) {
    // console.log(this.media);

    const url = `http://media.mw.metropolia.fi/wbma/uploads/${e}`;
    this.photoViewer.show(url);
  }
}
