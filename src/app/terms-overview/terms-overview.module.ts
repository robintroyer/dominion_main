import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsOverviewPageRoutingModule } from './terms-overview-routing.module';

import { TermsOverviewPage } from './terms-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsOverviewPageRoutingModule
  ],
  declarations: [TermsOverviewPage]
})
export class TermsOverviewPageModule {}
