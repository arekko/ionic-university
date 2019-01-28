import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }

  logout() {
    localStorage.removeItem("login");
    this.mediaProvider.isLoggedIn = false;
    this.navCtrl.push(MenuPage);
  }
}
