import {Page,NavController} from 'ionic-angular';
import {Second} from "../second/second";

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  private nav;
  constructor(nav : NavController) {

    this.nav = nav;


  }

  secondpage(){

    this.nav.push(Second);
  }
}
