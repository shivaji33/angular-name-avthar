import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avthar",
  templateUrl: "./avthar.component.html",
  styleUrls: [ './avthar.component.scss' ]
})
export class AvtharComponent {
  private _avtharName: string;
  set avtharName(value: string) {
    const str = value;
    const matches = str.match(/\b(\w)/g);
    const acronym = matches.join("")
    this._avtharName = acronym;
  }
  @Input("name") get avtharName() {
    return this._avtharName;
  }
  @Input() size;
  randomBgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
