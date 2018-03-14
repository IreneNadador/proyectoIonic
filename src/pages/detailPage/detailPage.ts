import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-detailPage',
    templateUrl: 'detailPage.html'
})

export class detailPage {
    selectedItem: any;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.selectedItem = navParams.get('item');
    }
}