import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StockComponent} from './stocks.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
       path: 'stocks',
       component: StockComponent
    }];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);