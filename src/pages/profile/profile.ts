import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MediaProvider } from "./../../providers/media/media";
import { MyFilesPage } from './../my-files/my-files';

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.mediaProvider.isLoggedIn = false;
    this.navCtrl.parent.select(0);
  }


  showMyFilePage() {
    this.navCtrl.push(MyFilesPage)
  }
}
