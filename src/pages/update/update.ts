import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Chooser } from "@ionic-native/chooser";
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams
} from "ionic-angular";
import { MediaProvider } from "../../providers/media/media";

@IonicPage()
@Component({
  selector: "page-update",
  templateUrl: "update.html"
})
export class UpdatePage {
  filedata: any;
  file: any;
  title = "";
  description = "";
  blob: any;
  fileId: number;
  mediaInfo: any;

  filters = {
    brightness: 100,
    contrast: 100,
    warmth: 0,
    saturation: 100
  };

  loading = this.loadingCtrl.create({
    content: "Uploading, please wait..."
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public mediaProvider: MediaProvider,
    public loadingCtrl: LoadingController,
    private chooser: Chooser
  ) {
    this.getMediaInfo();
  }

  submitUploadForm() {
    const description = `[d]${this.description}[/d]`;
    const filters = `[f]${JSON.stringify(this.filters)}[/f]`;
    // show spinner
    this.loading.present().catch();
    const fd = new FormData();
    fd.append("title", this.title);
    fd.append("description", description + filters);
    fd.append("file", this.blob);
    this.mediaProvider.upload(fd).subscribe(resp => {
      console.log(resp);
      setTimeout(() => {
        this.navCtrl.pop().catch();
        this.loading.dismiss().catch();
      }, 2000);
    });
  }

  showPreview() {
    const reader = new FileReader();
    reader.onloadend = evt => {
      this.filedata = reader.result;
    };

    // if (this.file.type.includes("video")) {
    //   this.filedata = "http://via.placeholder.com/500X200/000?text=Video";
    // } else if (this.file.type.includes("audio")) {
    //   this.filedata = "http://via.placeholder.com/500X200/000?text=Audio";
    // } else {
    // }

    reader.readAsDataURL(this.blob);
  }

  ionViewDidLoad() {}

  async handleChooser() {
    const file = await this.chooser.getFile("image/*");

    if (file) {
      this.blob = new Blob([file.data], {
        type: file.mediaType
      });
    }
    this.showPreview();
  }

  getMediaInfo() {
    this.mediaProvider.getSingleMedia(this.fileId).subscribe(res => {
      this.mediaInfo = res;
    });
  }
}
