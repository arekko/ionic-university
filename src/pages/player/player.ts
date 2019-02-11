import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-player",
  templateUrl: "player.html"
})
export class PlayerPage {
  fileId: any;
  mediaInfo: object;
  userInfo: object;
  fileType: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {
    this.fileId = this.navParams.get("fileId");
  }

  ionViewDidLoad() {
    console.log(this.fileId);
    this.getMediaInfo();
  }

  getMediaInfo() {
    this.mediaProvider.getSingleMedia(this.fileId).subscribe(res => {
      this.getUserData(res.user_id);
      this.mediaInfo = res;
      this.fileType = res.media_type;
      console.log(res);
    });
  }

  getUserData(userId) {
    this.mediaProvider.getUserInfo(userId).subscribe(res => {
      console.log(res);
      this.userInfo = res;
    });
  }
}
