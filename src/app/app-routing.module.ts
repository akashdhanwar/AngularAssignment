import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'assignment', pathMatch: 'full' },
  { path: 'assignment', loadChildren: () => import('../assignment/assignment.module').then(m => m.AssignmentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
