import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MediaProvider } from "../../providers/media/media";
import { LoginUser, LoginResponse } from "../../interfaces/user";
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login-register",
  templateUrl: "login-register.html"
})
export class LoginRegisterPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginRegisterPage");
    if (localStorage.getItem("login")) {
      this.navCtrl.push(MenuPage);
    }
  }

  user: LoginUser = {
    username: "",
    password: ""
  };
  async submitForm() {
    await this.mediaProvider
      .login(this.user)
      .subscribe((res: LoginResponse) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("login", res.token);
          this.navCtrl.push(MenuPage);
        }
      });
  }
}
