import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanadaComponent } from './canada/canada.component';
import { ChinaComponent } from './china/china.component';
import { EgyptComponent } from './egypt/egypt.component';
import { FranceComponent } from './france/france.component';
import { ItalyComponent } from './italy/italy.component';
import { JapanComponent } from './japan/japan.component';


const routes: Routes = [
  {
    component:CanadaComponent,
    path:'canada'
  },
  {
    component:ChinaComponent,
    path:'china'
  },
  {
    component:EgyptComponent,
    path:'egypt'
  },
  {
    component:FranceComponent,
    path:'france'
  },
  {
    component:ItalyComponent,
    path:'italy'
  },
  {
    component:JapanComponent,
    path:'japan'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
