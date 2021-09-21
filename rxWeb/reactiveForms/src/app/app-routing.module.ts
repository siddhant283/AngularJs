import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncValidatorsComponent } from './async-validators/async-validators.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncValidatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
