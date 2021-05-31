import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewMainPage } from './overview-main.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewMainPageRoutingModule {}
