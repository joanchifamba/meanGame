import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { GamesDataService } from './games-data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    GamesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
      path: "",
      component: HomeComponent 
    },
    {
      path: "games",
      component: GamesComponent }
      ])


  ],
  providers: [GamesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
