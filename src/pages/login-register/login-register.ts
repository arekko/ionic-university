import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { IonicPage, NavController } from "ionic-angular";
import { LoginResponse } from "../../interfaces/user";
import { MediaProvider } from "../../providers/media/media";

@IonicPage()
@Component({
  selector: "page-login-register",
  templateUrl: "login-register.html"
})

export class LoginRegisterPage {
  loginForm: FormGroup;
  registerForm: FormGroup;
  confirmPassword: string;
  showRegister: boolean = false;
  submitAttempt: boolean = false;

  constructor(
    public navCtrl: NavController,
    public mediaProvider: MediaProvider,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      username: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(3),
          Validators.pattern("[a-zA-Z ]*"),
          Validators.required
        ])
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      ]
    });
    this.registerForm = formBuilder.group({
      username: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(3),
          Validators.pattern("[a-zA-Z ]*"),
          Validators.required
        ]),
        this.checkUsername
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(5), Validators.required])
      ],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      full_name: [""]
    });
  }

  ionViewDidLoad() {}

  submitLoginForm() {
    if (!this.loginForm.valid) {
      alert("Invalid login input");
    } else {
      console.log(this.loginForm.value);
      this.loginUser(this.loginForm.value);
    }
  }
  submitRegisterForm() {
    // this.mediaProvider
    //   .register(this.register)
    //   .subscribe(async (res: RegisterResponse) => {
    //     console.log(res);
    //     res.user_id &&
    //       this.loginUser({
    //         username: this.register.username,
    //         password: this.register.password
    //       });
    //   });
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

  async checkUsername(control: FormControl) {
    const username = control.value;
    console.log(username);
    return await this.mediaProvider.checkUsernameAvailability(username);
  }
}
