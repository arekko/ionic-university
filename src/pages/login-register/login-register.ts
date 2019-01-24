import { MenuPage } from "./../menu/menu";
import { MediaProvider } from "./../../providers/media/media";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  LoginUser,
  LoginResponse,
  RegisterUserData,
  RegisterResponse
} from "../../interfaces/user";
import { HttpResponse } from "@angular/common/http";

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
    public mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {}

  login: LoginUser = {
    username: "",
    password: ""
  };
  register: RegisterUserData = {
    username: "",
    password: "",
    email: "",
    full_name: ""
  };
  async submitLoginForm() {
    await this.mediaProvider
      .login(this.login)
      .subscribe(async (res: LoginResponse) => {
        console.log(res);
        if (res.token) {
          this.mediaProvider.isLoggedIn = true;
          await localStorage.setItem("login", res.token);
          this.navCtrl.push(MenuPage);
        }
      });
  }

  async submitRegisterForm() {
    console.log(this.register);

    await this.mediaProvider
      .register(this.register)
      .subscribe(async (res: RegisterResponse) => {
        console.log(res);
      });
  }
}
