import { EntryExitComponent } from './../entry-exit/entry-exit/entry-exit.component';
import { DetailsComponent } from './../entry-exit/details/details.component';
import { StatisticsComponent } from './../entry-exit/statistics/statistics.component';
import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {path: 'details', component: DetailsComponent},
    {path: 'entry-exit', component: EntryExitComponent},
    {path: '', component: StatisticsComponent},
    {path: '**', redirectTo: ''}
];

