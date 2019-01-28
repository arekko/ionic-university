import { ProfilePage } from "./../pages/profile/profile";
import { PipesModule } from "./../pipes/pipes.module";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MediaProvider } from "../providers/media/media";
import { MenuPage } from "../pages/menu/menu";
import { LoginRegisterPage } from "../pages/login-register/login-register";

@NgModule({
  declarations: [MyApp, HomePage, MenuPage, LoginRegisterPage, ProfilePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, MenuPage, LoginRegisterPage, ProfilePage],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    HttpClientModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider
  ]
})
export class AppModule {}
