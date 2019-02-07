import { ChangeDetectorRef, Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams
} from "ionic-angular";
import { MediaProvider } from "./../../providers/media/media";

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-upload",
  templateUrl: "upload.html"
})
export class UploadPage {
  filedata = "";
  file: File;
  title = "";
  description = "";

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
    private cd: ChangeDetectorRef,
    public loadingCtrl: LoadingController
  ) {}

  submitUploadForm() {
    const description = `[d]${this.description}[/d]`;
    const filters = `[f]${JSON.stringify(this.filters)}[/f]`;
    // show spinner
    this.loading.present().catch();
    const fd = new FormData();
    fd.append("title", this.title);
    fd.append("description", description + filters);
    fd.append("file", this.file);
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
      // console.log(reader.result);
      this.filedata = reader.result as string;
    };

    if (this.file.type.includes("video")) {
      this.filedata = "http://via.placeholder.com/500X200/000?text=Video";
    } else if (this.file.type.includes("audio")) {
      this.filedata = "http://via.placeholder.com/500X200/000?text=Audio";
    } else {
      reader.readAsDataURL(this.file);
    }
  }

  ionViewDidLoad() {}

  handleChange(event) {
    this.file = event.target.files[0];
    // call showPreview
    this.showPreview();
  }
}
