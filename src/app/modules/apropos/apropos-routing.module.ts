import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './components/apropos/apropos.component';

const routes: Routes = [
  { path: '', component: AproposComponent } // Route par défaut pour AproposModule
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AproposRoutingModule { }
