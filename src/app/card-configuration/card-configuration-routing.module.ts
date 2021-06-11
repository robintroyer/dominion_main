import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardConfigurationPage } from './card-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: CardConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardConfigurationPageRoutingModule {}
