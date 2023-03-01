import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from './pages/detail-view/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ListViewModule } from './pages/list-view/list-view.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [AppComponent, DetailComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListViewModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
