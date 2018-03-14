import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../slide/slide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  nextPage(){
    this.navCtrl.setRoot(SlidePage, {},
    {
      animate: true, direction: 'forward'
    })
  }

}
