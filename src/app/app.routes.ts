import { Routes } from '@angular/router';
import { ScreenSaverComponent } from './screen-saver/screen-saver.component';
import { AppleTvComponent } from './apple-tv/apple-tv.component';
import { RaptureComponent } from './rapture/rapture.component';
import { MikadoConfigComponent } from './mikado-config/mikado-config.component';
import { MikadoSelectionComponent } from './mikado-selection/mikado-selection.component';
import { RaptureSuggestionsComponent } from './rapture-suggestions/rapture-suggestions.component';

export const routes: Routes = [
    { path: '', component: AppleTvComponent },
    { path: 'apple-tv', component: AppleTvComponent },
    { path: 'rapture', component: RaptureComponent },
    { path: 'mikado-selection', component: MikadoSelectionComponent },
    { path: 'mikado-config', component: MikadoConfigComponent },
    { path: 'screen-saver', component: ScreenSaverComponent },
    { path: 'suggestions', component: RaptureSuggestionsComponent }
];
