import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetOverviewPageRoutingModule } from './set-overview-routing.module';

import { SetOverviewPage } from './set-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetOverviewPageRoutingModule
  ],
  declarations: [SetOverviewPage]
})
export class SetOverviewPageModule {}
