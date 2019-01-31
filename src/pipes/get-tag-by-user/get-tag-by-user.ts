import { Pipe, PipeTransform } from "@angular/core";
import { MediaProvider } from "../../providers/media/media";
import { MediaResponse } from "./../../interfaces/media";

@Pipe({
  name: "getTagByUser"
})
export class GetTagByUserPipe implements PipeTransform {
  constructor(public mediaProvider: MediaProvider) {}

  async transform(tag: string) {
    return new Promise((resolve, reject) => {
      this.mediaProvider
        .getFilesByTag(tag)
        .subscribe((files: MediaResponse[]) => {
          files.forEach((file: MediaResponse) => {
            file.user_id === this.mediaProvider.user.user_id
              ? resolve(file.user_id)
              : reject("No profile image added");
          });
        });
    });
  }
}
