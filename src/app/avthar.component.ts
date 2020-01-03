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
    let acronym = matches.join("")
    // set max length to 3
    if(acronym.length > 2) {
    acronym = acronym.substr(0, 3);
    }
    this._avtharName = acronym;
  }
  @Input("name") get avtharName() {
    return this._avtharName;
  }
  @Input() size;
  //random color for avthar
  randomBgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
