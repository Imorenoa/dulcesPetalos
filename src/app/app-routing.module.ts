import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './pages/detail-view/detail/detail.component';
import { ListViewComponent } from './pages/list-view/list-view/list-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: ListViewComponent,
  },
  {
    path: 'home/detail/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
