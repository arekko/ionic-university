import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient
  ) {}

  configUrl: string = "assets/test.json";

  ngOnInit() {
    this.fetchData();
  }

  data: Pic[];

  async fetchData() {
    await this.http.get<Pic[]>(this.configUrl).subscribe((res: Pic[]) => {
      this.data = res;
      console.log(this.data);
    });
  }

  itemHandle(e) {
    this.photoViewer.show(e);
  }
}
