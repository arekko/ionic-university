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

    return new Promise((resolve, reject) => {
      this.mediaProvider
        .getSingleMedia(id)
        .subscribe((response: MediaResponse) => {
          const url = this.mediaProvider.mediaFilePath;

          if (response.thumbnails) {
            switch (args[0]) {
              case "large":
                resolve(`${url}/${response.thumbnails.w640}`);
                break;
              case "medium":
                resolve(`${url}/${response.thumbnails.w320}`);
                break;
              case "screenshot":
                resolve(`${url}/${response.screenshot}`);
                break;
              default:
                resolve(`${url}/${response.thumbnails.w160}`);
            }
          } else {
            resolve(
              `https://icons-for-free.com/free-icons/png/512/1891017.png`
            );
          }
        });
    });
  }
}
