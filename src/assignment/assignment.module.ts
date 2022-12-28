import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TableComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class AssignmentModule { }
