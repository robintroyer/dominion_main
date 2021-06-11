import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardConfigurationPageRoutingModule } from './card-configuration-routing.module';

import { CardConfigurationPage } from './card-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardConfigurationPageRoutingModule
  ],
  declarations: [CardConfigurationPage]
})
export class CardConfigurationPageModule {}
