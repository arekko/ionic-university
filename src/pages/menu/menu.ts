import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { LogoutPage } from "../logout/logout";
import { LoginRegisterPage } from "../login-register/login-register";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  homePage = HomePage;
  loginRegisterPage = LoginRegisterPage;
  logoutPage = LogoutPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    const token = localStorage.getItem("login");
    token && (this.mediaProvider.isLoggedIn = true);
    console.log(this.mediaProvider.isLoggedIn);
  }
}
