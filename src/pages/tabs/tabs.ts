import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core'

import {tab1Root} from '../pages'
import {tab2Root} from '../pages'
import {tab3Root} from '../pages'
import {tab4Root} from '../pages'

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})

export class tabsPage {
    tab1Root: any = tab1Root;
    tab2Root: any = tab2Root;
    tab3Root: any = tab3Root;
    tab4Root: any = tab4Root;

    tab1Title = "";
    tab2Title = "";
    tab3Title = "";
    tab4Title = "";

    constructor(public navCtrl: NavController, public translateService: TranslateService) {
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE']).subscribe(values => {
          this.tab1Title = values['TAB1_TITLE'];
          this.tab2Title = values['TAB2_TITLE'];
          this.tab3Title = values['TAB3_TITLE'];
          this.tab4Title = values['TAB4_TITLE'];
        });
      }
}