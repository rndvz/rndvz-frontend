import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { OcticonDirective } from './directives/octicon.directive';
import { UserService } from './services/user.service';


const appRoutes = [
  { path: '', component: MainComponent },
  { path: 'card', component: CardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ChatComponent,
    CardsComponent,
    CardComponent,
    SettingsComponent,
    LoginComponent,
    OcticonDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
