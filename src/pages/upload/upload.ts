import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, FabButton } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { renderComponent } from "@angular/core/src/render3";

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
  uploadForm: FormGroup;
  fileData = "";
  file: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public mediaProvider: MediaProvider
  ) {
    this.uploadForm = formBuilder.group({
      title: [""],
      description: [""],
      file: [null]
    });
  }

  submitUploadForm() {
    console.log(this.uploadForm.value);

    // const fd = new FormData();
    // fd.append("title", this.file);
    // fd.append("description", this.file);
    // fd.append("file", this.file);

    // this.mediaProvider.upload(fd).subscribe(res => console.log(res));
  }

  showPreview() {
    let reader = new FileReader();

    if (this.file) {
      reader.readAsDataURL(this.file);
    }

    reader.onload = () => {
      console.log(reader.result);
      this.fileData = reader.result as string;
      this.uploadForm.patchValue({
        file: "hello"
      });
    };
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UploadPage");
  }

  handleChange(event) {
    this.file = event.target.files[0];

    this.showPreview();
  }
}
