import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from './wizard/screen/screen.component';
import { ItemComponent } from './wizard/item/item.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [{
  path:'', component: ScreenComponent
}];

@NgModule({
  declarations: [ScreenComponent, ItemComponent],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
