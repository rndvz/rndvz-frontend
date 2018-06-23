import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { ChatComponent } from './components/chat/chat.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule} from '@angular/common/http';
import {RestFullService} from './services/rest-full.service';

const appRoutes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: '', component: CardsComponent },
      { path: 'chat/:user-id', component: ChatComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'refresh', component: RefreshComponent }
  ]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MatchesComponent,
    CardsComponent,
    CardComponent,
    SettingsComponent,
    LoginComponent,
    RefreshComponent,
    ChatComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    RestFullService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
