import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsOverviewPage } from './terms-overview.page';

const routes: Routes = [
  {
    path: '',
    component: TermsOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsOverviewPageRoutingModule {}
