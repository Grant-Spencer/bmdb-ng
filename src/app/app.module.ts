import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';
import { MenuComponent } from './core/menu/menu.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreateComponent,
    ActorListComponent,
    ActorCreateComponent,
    NoComponentDefinedComponent,
    MenuComponent,
    MovieDetailComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
