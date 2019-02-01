import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  LoginResponse,
  LoginUser,
  RegisterResponse,
  RegisterUserData
} from "../../interfaces/user";
import { MediaProvider } from "../../providers/media/media";
import { UsernameAvailability } from "./../../interfaces/user";

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
  submitLoginForm() {
    this.loginUser(this.login);
  }

  submitRegisterForm() {
    this.mediaProvider
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

  loginUser(userData) {
    this.mediaProvider.login(userData).subscribe(async (res: LoginResponse) => {
      if (res.token) {
        this.mediaProvider.isLoggedIn = true;
        localStorage.setItem("token", res.token);
        this.mediaProvider.user = res.user;

        this.navCtrl.parent.select(0);
      }
    });
  }

  swapLoginRegisterForm() {
    this.showRegister = !this.showRegister;
  }

  checkUsername() {
    this.mediaProvider
      .checkUsernameAvailability(this.register.username)
      .subscribe((response: UsernameAvailability) => {
        console.log(response);

        if (!response.available) {
          alert("this username already exist");
        }
      });
  }
}
