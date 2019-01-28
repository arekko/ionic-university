import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CurrentUserResponse } from "./../../interfaces/user";
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

  public data: CurrentUserResponse;

  ngOnInit() {
    this.mediaProvider
      .getCurrentUser()
      .subscribe((response: CurrentUserResponse) => {
        this.data = Object.assign({}, response);
      });
  }

  // getUser() {
  //   this.mediaProvider.getCurrentUser();
  //   this.user.subscribe(response => {
  //     console.log(response);
  //     this.data = { ...response };
  //   });
  //   console.log("data", this.data);
  // }

  logout() {
    // localStorage.removeItem("login");
    // this.mediaProvider.isLoggedIn = false;
    // this.navCtrl.push(MenuPage);
    console.log(this.data);
  }
}
