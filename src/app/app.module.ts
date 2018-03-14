import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SlidePage } from '../pages/slide/slide';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Storage, IonicStorageModule } from '@ionic/storage';

import { Settings } from '../providers/settings';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { subPage } from '../pages/subPage/subPage';
import { listsPages } from '../pages/lists/lists';
import { tabsPage } from '../pages/tabs/tabs';
import { detailPage } from '../pages/detailPage/detailPage';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { SearchPage } from '../pages/search/search';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';






import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';

import { Camera } from '@ionic-native/camera';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/langs/', '.json');
}


export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: 'Fuego',
    option2: 'Aire',
    option3: 'Agua',
    option4: 'Tierra',
    option5: 'Quinto Elemento'
  });
}


/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  HomePage,
  SlidePage,
  subPage,
  listsPages,
  tabsPage,
  detailPage,
  ListMasterPage,
  ItemCreatePage,
  SearchPage,
  ItemDetailPage
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    Camera,
    Items,
    Api,
    SplashScreen,
    StatusBar,

    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})

export class AppModule {}
