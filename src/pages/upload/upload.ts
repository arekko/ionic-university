import { ChangeDetectorRef, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";
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
  uploadForm: FormGroup;
  fileData = "";
  file: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public mediaProvider: MediaProvider,
    private cd: ChangeDetectorRef
  ) {
    this.uploadForm = formBuilder.group({
      title: [""],
      description: [""],
      file: [null]
    });
  }

  submitUploadForm() {
    console.log(this.uploadForm.value);

    const { title, description, file } = this.uploadForm.value;
    console.log(title, description, file);

    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("file", file);

    this.mediaProvider.upload(fd).subscribe(res => {
      console.log(res);
      setTimeout(() => {}, 2000);
    });
  }

  showPreview() {}

  ionViewDidLoad() {}

  handleChange(event) {
    this.file = event.target.files[0];

    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.uploadForm.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        // this.showPreview();
      };
    }
  }
}
