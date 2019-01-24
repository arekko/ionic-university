import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MenuPage } from "./../menu/menu";

@IonicPage()
@Component({
  selector: "page-logout",
  templateUrl: "logout.html"
})
export class LogoutPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    this.logout();
  }

  async logout() {
    console.log("logout");

    await localStorage.removeItem("login");
    this.mediaProvider.isLoggedIn = false;
    this.navCtrl.push(MenuPage);
  }
}
