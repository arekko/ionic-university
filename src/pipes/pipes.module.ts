import { NgModule } from "@angular/core";
import { GetTagByUserPipe } from "./get-tag-by-user/get-tag-by-user";
import { ThumbnailPipe } from "./thumbnail/thumbnail";
@NgModule({
  declarations: [ThumbnailPipe, GetTagByUserPipe],
  imports: [],
  exports: [ThumbnailPipe, GetTagByUserPipe]
})
export class PipesModule {}
