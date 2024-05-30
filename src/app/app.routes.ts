import { Routes } from '@angular/router';
import { ScreenSaverComponent } from './screen-saver/screen-saver.component';
import { AppleTvComponent } from './apple-tv/apple-tv.component';
import { GsAppComponent } from './gs-app/gs-app.component';

export const routes: Routes = [
    {path: 'screen-saver', component: ScreenSaverComponent},
    {path: 'apple-tv', component: AppleTvComponent},
    {path: 'gs-app', component: GsAppComponent}
];
