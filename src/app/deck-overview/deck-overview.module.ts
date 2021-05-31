import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeckOverviewPageRoutingModule } from './deck-overview-routing.module';

import { DeckOverviewPage } from './deck-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeckOverviewPageRoutingModule
  ],
  declarations: [DeckOverviewPage]
})
export class DeckOverviewPageModule {}
