import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeckGeneratorPage } from './deck-generator.page';

const routes: Routes = [
  {
    path: '',
    component: DeckGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckGeneratorPageRoutingModule {}
