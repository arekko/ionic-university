import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MenuPage } from "../menu/menu";
import { MediaProvider } from "./../../providers/media/media";

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
    this.navCtrl.push(MenuPage);
  }
}
