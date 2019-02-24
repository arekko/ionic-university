import { NgModule } from "@angular/core";
import { GetTagByUserPipe } from "./get-tag-by-user/get-tag-by-user";
import { ThumbnailPipe } from "./thumbnail/thumbnail";
import { GetUserAvatarByIdPipe } from './get-user-avatar-by-id/get-user-avatar-by-id';
import { GetFilterPipe } from './get-filter/get-filter';
import { DecodeDescPipe } from './decode-desc/decode-desc';
@NgModule({
  declarations: [ThumbnailPipe, GetTagByUserPipe,
    GetUserAvatarByIdPipe,
    GetFilterPipe,
    DecodeDescPipe],
  imports: [],
  exports: [ThumbnailPipe, GetTagByUserPipe,
    GetUserAvatarByIdPipe,
    GetFilterPipe,
    DecodeDescPipe]
})
export class PipesModule {}
