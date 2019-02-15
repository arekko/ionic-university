import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PlayerPage } from "../player/player";
import { MediaProvider } from "./../../providers/media/media";
import { UpdatePage } from "./../update/update";

@IonicPage()
@Component({
  selector: "page-my-files",
  templateUrl: "my-files.html"
})
export class MyFilesPage {
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyFilesPage");
    this.getUserFiles();
  }

  getUserFiles() {
    return (this.data = this.mediaProvider.getCurrentUserFiles());
  }

  showPlayerPage(fileId) {
    this.navCtrl.push(PlayerPage, {
      fileId: fileId
    });
  }

  onDelete(fileId) {
    this.mediaProvider.deleteFileById(fileId).subscribe(res => {
      this.getUserFiles();
    });
  }

  showUpdateView(fileId: string) {
    this.navCtrl.push(UpdatePage, {
      fileId: fileId
    });
  }
}
