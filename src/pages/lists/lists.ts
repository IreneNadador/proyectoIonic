import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { detailPage } from '../detailPage/detailPage';



@Component({
    selector: 'page-lists',
    templateUrl: 'lists.html'
})

export class listsPages {
    icons: string[];
    items: Array<{title: string, note: string, icon: string}>;
    description: string[]; 

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.icons = ['flame','paper-plane','water','planet','star'];
        this.description = [' Fuego', ' Aire', ' Agua', ' Tierra','l quinto elemento'];
        this.items = [];

        for(let i = 1; i < 6; i++){
            this.items.push({title: 'Item de' + this.description[i-1],
            note: 'Este es el item #' + i,
            icon: this.icons[i-1]});
        }
    }
    itemTapped(event, item){
        this.navCtrl.push(detailPage,{item: item});
    }
}