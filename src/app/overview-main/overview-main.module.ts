import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewMainPageRoutingModule } from './overview-main-routing.module';

import { OverviewMainPage } from './overview-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewMainPageRoutingModule
  ],
  declarations: [OverviewMainPage]
})
export class OverviewMainPageModule {}
