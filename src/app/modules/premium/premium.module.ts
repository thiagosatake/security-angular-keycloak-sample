import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumRoutingModule } from './premium-routing.module'; 
import { PremiumComponent } from './premium.component';

import { ThemesModule } from '../../themes/themes.module'


@NgModule({
  declarations: [
    PremiumComponent
  ],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    ThemesModule
  ]
})
export class PremiumModule { }
