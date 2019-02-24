import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Chooser } from "@ionic-native/chooser";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { ItemListComponent } from "../components/item-list/item-list";
import { HomePage } from "../pages/home/home";
import { LoginRegisterPage } from "../pages/login-register/login-register";
import { MenuPage } from "../pages/menu/menu";
import { UpdatePage } from "../pages/update/update";
import { MediaProvider } from "../providers/media/media";
import { MyFilesPage } from "./../pages/my-files/my-files";
import { PlayerPage } from "./../pages/player/player";
import { ProfilePage } from "./../pages/profile/profile";
import { UploadPage } from "./../pages/upload/upload";
import { PipesModule } from "./../pipes/pipes.module";
import { MyApp } from "./app.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginRegisterPage,
    ProfilePage,
    UploadPage,
    PlayerPage,
    MyFilesPage,
    UpdatePage,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginRegisterPage,
    ProfilePage,
    UploadPage,
    PlayerPage,
    MyFilesPage,
    UpdatePage,
    ItemListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    HttpClientModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider,
    Chooser
  ]
})
export class AppModule {}
