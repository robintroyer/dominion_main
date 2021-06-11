import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsGeneratorPageRoutingModule } from './terms-generator-routing.module';

import { TermsGeneratorPage } from './terms-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsGeneratorPageRoutingModule
  ],
  declarations: [TermsGeneratorPage]
})
export class TermsGeneratorPageModule {}
