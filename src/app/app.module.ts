import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ChatComponent } from './components/chat/chat.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { OcticonDirective } from './directives/octicon.directive';
import { CardsComponent } from './components/cards/cards.component';


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
    CardComponent,
    ChatComponent,
    SettingsComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    OcticonDirective,
    CardsComponent
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
