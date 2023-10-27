import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileemployeeComponent } from './profileemployee/profileemployee.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileemployeeComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProfileemployeeModule { }
