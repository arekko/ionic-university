import { Pipe, PipeTransform } from "@angular/core";
import { MediaResponse } from "./../../interfaces/media";
import { MediaProvider } from "./../../providers/media/media";

@Pipe({
  name: "thumbnail"
  // pure: false
})
export class ThumbnailPipe implements PipeTransform {
  constructor(private mediaProvider: MediaProvider) {}
  private cachedId: number;
  private thumbnail: string;

  async transform(id: number, ...args) {
    // private thumbnail = '';
    // private cachedId = id;

    if (this.cachedId !== id) {
      this.cachedId = id;
    }

    // this.mediaProvider
    //   .getSingleMedia(id)
    //   .subscribe((response: MediaResponse) => {
    //     switch (args[0]) {
    //       case "large":
    //         this.thumbnail = response.thumbnails.w640;
    //         break;
    //       case "medium":
    //         this.thumbnail = response.thumbnails.w320;
    //         break;
    //       case "screenshot":
    //         this.thumbnail = response.screenshots;
    //         break;
    //       default:
    //         this.thumbnail = response.thumbnails.w160;
    //     }
    //   });

    // return this.thumbnail;

    return new Promise((resolve, reject) => {
      this.mediaProvider
        .getSingleMedia(id)
        .subscribe((response: MediaResponse) => {
          switch (args[0]) {
            case "large":
              resolve(response.thumbnails.w640);
              break;
            case "medium":
              resolve(response.thumbnails.w320);
              break;
            case "screenshot":
              resolve(response.screenshot);
              break;
            default:
              resolve(response.thumbnails.w160);
          }
        });
    });
  }
}
