import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeckGeneratorPageRoutingModule } from './deck-generator-routing.module';

import { DeckGeneratorPage } from './deck-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeckGeneratorPageRoutingModule
  ],
  declarations: [DeckGeneratorPage]
})
export class DeckGeneratorPageModule {}
