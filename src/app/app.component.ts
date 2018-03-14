import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SlidePage } from '../pages/slide/slide';

import { TranslateService } from '@ngx-translate/core'
import { subPage } from '../pages/subPage/subPage';
import { listsPages } from '../pages/lists/lists';
import { detailPage } from '../pages/detailPage/detailPage';
import { tabsPage } from '../pages/tabs/tabs';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ListMasterPage } from '../pages/list-master/list-master';

import { FirstRunPage } from '../pages/pages';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Home', component: HomePage },
    { title: 'Slide Page', component: SlidePage },
    { title: 'Sub Page', component: subPage },
    { title: 'lists Page', component: listsPages },
    { title: 'tabs Page', component: tabsPage },
    { title: 'Item Master', component: ListMasterPage}
  ]

  constructor(private translate: TranslateService, platform: Platform, private config: Config, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.initTranslate();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('es'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


