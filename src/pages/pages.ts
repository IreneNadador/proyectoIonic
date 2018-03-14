import { listsPages } from '../pages/lists/lists';
import { subPage } from '../pages/subPage/subPage';
import { HomePage } from '../pages/home/home';
import { tabsPage } from '../pages/tabs/tabs';
import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';


export const FirstRunPage = HomePage;

export const MainPage = tabsPage;

export const tab1Root = HomePage;
export const tab2Root = subPage;
export const tab3Root = listsPages;
export const tab4Root = ListMasterPage;


