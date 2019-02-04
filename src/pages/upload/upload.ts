import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.uploadForm = formBuilder.group({
      title: [""],
      description: [""],
      file: [null]
    });
  }

  submitUploadForm() {
    console.log(this.uploadForm.value);
  }

  showPreview() {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UploadPage");
  }

  handleChange(event) {
    console.log(event.target.files[0]);
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      // this.uploadForm.patchValue({
      //   file: reader.result
      // });J
      console.log(reader.result);
      this.fileData = reader.result as string;
      console.log(this.fileData);
    };
  }
}
