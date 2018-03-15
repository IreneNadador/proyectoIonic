import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { SearchPage } from '../search/search';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';


@Component({
    selector: 'page-list-master',
    templateUrl: 'list-master.html'
})
export class ListMasterPage {
    currentItems: Item[];

    constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
        this.currentItems = this.items.query();
    }
    addItem() {
        let addModal = this.modalCtrl.create(ItemCreatePage);
        addModal.onDidDismiss(item => {
            if (item) {
                this.items.add(item);
            }
        })
        addModal.present();
    }
    deleteItem(item) {
        this.items.delete(item);
    }
    search() {
        this.navCtrl.push(SearchPage, {});
    }
    openItem(item) {
        this.navCtrl.push(ItemDetailPage, { item: item });
    }
}