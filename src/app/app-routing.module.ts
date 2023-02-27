import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './pages/detail-view/detail/detail.component';
import { ListViewComponent } from './pages/list-view/list-view/list-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'list',
    component: ListViewComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
