import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AdminComponent,
    AdminContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ToastModule
  ]
})
export class AdminModule { }
