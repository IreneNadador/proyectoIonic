import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import {TranslateService} from '@ngx-translate/core'
import { subPage } from '../subPage/subPage';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
    selector: 'page-slide',
    templateUrl: 'slide.html'
})

export class SlidePage {
    slides: Slide[];
    showSkip = true;

    constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService){
        translate.setDefaultLang('es');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('es');

        translate.get(['SLIDE1_TITLE', 'SLIDE1_DESCRIPTION',
         'SLIDE2_TITLE', 'SLIDE2_DESCRIPTION',
         'SLIDE3_TITLE', 'SLIDE3_DESCRIPTION',
         'SLIDE4_TITLE', 'SLIDE4_DESCRIPTION']).subscribe((values) => {
            console.log('Valores cargados',values);
            this.slides=[
                {
                    title: values.SLIDE1_TITLE,
                    description: values.SLIDE1_DESCRIPTION,
                    image: 'assets/imgs/slidebox-img-1.png'
                },
                {
                    title: values.SLIDE2_TITLE,
                    description: values.SLIDE2_DESCRIPTION,
                    image: 'assets/imgs/slidebox-img-2.png'
                },
                {
                    title: values.SLIDE3_TITLE,
                    description: values.SLIDE3_DESCRIPTION,
                    image: 'assets/imgs/slidebox-img-3.png'
                },
                {
                    title: values.SLIDE4_TITLE,
                    description: values.SLIDE4_DESCRIPTION,
                    image: 'assets/imgs/slidebox-img-4.png'
                }

            ]
        })
    }

    ionViewWillLeave(){
        this.menu.enable(true);
    }

    ionViewDidEnter(){
        this.menu.enable(false);
    }

    nextPage(){
        this.navCtrl.setRoot(subPage, {},
        {
          animate: true, direction: 'forward'
        })
      }
}