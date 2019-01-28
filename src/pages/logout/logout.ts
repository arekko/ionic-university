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

  
}
