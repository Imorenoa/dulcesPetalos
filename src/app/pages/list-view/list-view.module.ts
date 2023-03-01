import { CommonModule } from '@angular/common';
import { FlowerItemComponent } from './flower-item/flower-item.component';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [FlowerItemComponent, SearchComponent, ListViewComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
})
export class ListViewModule {}
