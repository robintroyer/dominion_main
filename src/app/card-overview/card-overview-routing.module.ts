import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardOverviewPage } from './card-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CardOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardOverviewPageRoutingModule {}
