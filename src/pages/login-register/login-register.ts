import { LoginUser } from "./../../interfaces/user";
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
import { registerLocaleData } from "@angular/common";

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
    this.loginUser(this.login);
  }

  async submitRegisterForm() {
    await this.mediaProvider
      .register(this.register)
      .subscribe(async (res: RegisterResponse) => {
        console.log(res);
        res.user_id &&
          this.loginUser({
            username: this.register.username,
            password: this.register.password
          });
      });
  }

  async loginUser(userData) {
    await this.mediaProvider
      .login(userData)
      .subscribe(async (res: LoginResponse) => {
        if (res.token) {
          this.mediaProvider.isLoggedIn = true;
          await localStorage.setItem("login", res.token);
          this.navCtrl.push(MenuPage);
        }
      });
  }
}
