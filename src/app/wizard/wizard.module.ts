import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [ ItemComponent],
  imports: [
    CommonModule,
    ]
})
export class WizardModule { }
