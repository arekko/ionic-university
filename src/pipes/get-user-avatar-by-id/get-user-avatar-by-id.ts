import { Pipe, PipeTransform } from "@angular/core";
import { MediaResponse } from "../../interfaces/media";
import { MediaProvider } from "../../providers/media/media";

@Pipe({
  name: "getUserAvatarById"
})
export class GetUserAvatarByIdPipe implements PipeTransform {
  constructor(public mediaProvider: MediaProvider) {}

  async transform(tag: string, userId: number) {
    console.log("user_id", userId);

    return new Promise((resolve, reject) => {
      this.mediaProvider
        .getFilesByTag(tag)
        .subscribe((files: MediaResponse[]) => {
          console.log("files from pipe", files);

          files.forEach((file: MediaResponse) => {
            if (file.user_id === userId) {
              console.log(file.file_id);

              resolve(file.file_id);
            } else {
              // reject("No profile image added");
            }
          });
        });
    });
  }
}
