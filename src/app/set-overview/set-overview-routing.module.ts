import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetOverviewPage } from './set-overview.page';

const routes: Routes = [
  {
    path: '',
    component: SetOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetOverviewPageRoutingModule {}
