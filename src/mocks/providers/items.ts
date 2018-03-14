import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {Item} from '../../models/item';

@Injectable()
export class Items{
    items: Item[] = [];

    defaultItem: any = {
        "name": "Fuego",
        "profilePic": "assets/imgs/elements/fire.jpg",
        "about": "Fuego es uno de los cuatro elementos"
    };

    constructor(public http: Http){
        let items = [
            {
                "name": "Fuego",
                "profilePic": "assets/imgs/elements/fire.jpg",
                "about": "Fuego es uno de los cuatro elementos"
            },{
                "name": "Aire",
                "profilePic": "assets/imgs/elements/air.jpg",
                "about": "El aire es invisible"
            },{
                "name": "Agua",
                "profilePic": "assets/imgs/elements/water.jpg",
                "about": "El agua es de estado liquido"
            },{
                "name": "Tierra",
                "profilePic": "assets/imgs/elements/earth.jpg",
                "about": "La tierra es vida"
            }
        ];
        for(let item of items){
            this.items.push(new Item(item));
        }
    }
    query(params?: any){
        if(!params){
            return this.items;
        }
        return this.items.filter((item) => {
            for (let key in params) {
              let field = item[key];
              if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                return item;
              } else if (field == params[key]) {
                return item;
              }
            }
            return null;
          });
    } 

    add(item: Item) {
        this.items.push(item);
      }
    
      delete(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    
}
