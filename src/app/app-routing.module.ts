import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGeneralComponent } from './details-general/details-general.component';
import { DetailsComponent } from './details/details.component';
import { OIAcadamyComponent } from './oiacadamy/oiacadamy.component';

const routes: Routes = [
  { path: 'details-general', component: DetailsGeneralComponent },
  { path: 'details-angular', component: DetailsComponent },
  { path: 'home', component: OIAcadamyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: OIAcadamyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
