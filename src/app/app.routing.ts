import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitiesComponent } from './activities/activities.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
