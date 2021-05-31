import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeckOverviewPage } from './deck-overview.page';

const routes: Routes = [
  {
    path: '',
    component: DeckOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckOverviewPageRoutingModule {}
