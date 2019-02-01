import { ProfilePage } from "./../profile/profile";
import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { LoginRegisterPage } from "../login-register/login-register";

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  homePage = HomePage;
  loginRegisterPage = LoginRegisterPage;
  profilePage = ProfilePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    // const token = localStorage.getItem("token");
    // token && (this.mediaProvider.isLoggedIn = true);
    // console.log(this.mediaProvider.isLoggedIn);
  }
}
