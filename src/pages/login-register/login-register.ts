import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  LoginResponse,
  LoginUser,
  RegisterResponse,
  RegisterUserData
} from "../../interfaces/user";
import { MediaProvider } from "../../providers/media/media";
import { MenuPage } from "../menu/menu";

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

  showRegister: boolean = false;

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
          await localStorage.setItem("token", res.token);
          this.navCtrl.push(MenuPage);
        }
      });
  }

  swapLoginRegisterForm() {
    this.showRegister = !this.showRegister;
  }
}
