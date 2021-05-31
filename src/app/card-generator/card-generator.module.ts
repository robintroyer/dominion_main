import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardGeneratorPageRoutingModule } from './card-generator-routing.module';

import { CardGeneratorPage } from './card-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardGeneratorPageRoutingModule
  ],
  declarations: [CardGeneratorPage]
})
export class CardGeneratorPageModule {}
