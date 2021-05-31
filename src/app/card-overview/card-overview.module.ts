import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardOverviewPageRoutingModule } from './card-overview-routing.module';

import { CardOverviewPage } from './card-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardOverviewPageRoutingModule
  ],
  declarations: [CardOverviewPage]
})
export class CardOverviewPageModule {}
