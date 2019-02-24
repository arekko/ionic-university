import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MediaResponse } from "./../../interfaces/media";

@Component({
  selector: "item-list",
  templateUrl: "item-list.html"
})
export class ItemListComponent {
  @Input() item: MediaResponse;
  @Output() onClickHandle = new EventEmitter<string>();
            
  constructor() {}
  // Here we passed the field id up to hierarchy we use Eventemitter for it
  onClick(fileId) {
    this.onClickHandle.emit(fileId);
  }
}
