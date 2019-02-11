import { NgModule } from "@angular/core";
import { GetTagByUserPipe } from "./get-tag-by-user/get-tag-by-user";
import { ThumbnailPipe } from "./thumbnail/thumbnail";
import { GetUserAvatarByIdPipe } from './get-user-avatar-by-id/get-user-avatar-by-id';
@NgModule({
  declarations: [ThumbnailPipe, GetTagByUserPipe,
    GetUserAvatarByIdPipe],
  imports: [],
  exports: [ThumbnailPipe, GetTagByUserPipe,
    GetUserAvatarByIdPipe]
})
export class PipesModule {}
