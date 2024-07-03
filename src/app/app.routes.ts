import { Routes } from '@angular/router';
import { ScreenSaverComponent } from './screen-saver/screen-saver.component';
import { AppleTvComponent } from './apple-tv/apple-tv.component';
import { RaptureComponent } from './rapture/rapture.component';

export const routes: Routes = [
    { path: '', component: AppleTvComponent },
    { path: 'apple-tv', component: AppleTvComponent },
    { path: 'rapture', component: RaptureComponent },
    { path: 'screen-saver', component: ScreenSaverComponent }
];
