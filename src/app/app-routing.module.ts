import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpdComponent } from './main/opd/opd.component';

const routes: Routes = [
{path: '' , redirectTo: 'opd', pathMatch: 'full'},
{path: 'opd', component: OpdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
