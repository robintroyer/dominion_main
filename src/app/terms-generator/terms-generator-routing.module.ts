import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsGeneratorPage } from './terms-generator.page';

const routes: Routes = [
  {
    path: '',
    component: TermsGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsGeneratorPageRoutingModule {}
