import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the DecodeDescPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "decodeDesc"
})
export class DecodeDescPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(desc: string, filter: string = "desc") {
    console.log("desk", desc);
    console.log("33", filter);

    const filterPattern = "\\[f\\](.*?)\\[\\/f\\]";
    const descPattern = "\\[f\\](.*?)\\[\\/f\\]";

    const decode = pattern => {
      const re = new RegExp(pattern);
      console.log(re.exec(desc));
      try {
        console.log(JSON.parse(re.exec(desc)[1]));

        return JSON.parse(re.exec(desc)[1]);
      } catch (e) {
        return {
          brightness: 100,
          contrast: 100,
          warmth: 0,
          saturation: 100
        };
      }
    };

    if (filter === "desc") {
      decode(descPattern);
    } else {
      decode(filterPattern);
    }
  }
}
