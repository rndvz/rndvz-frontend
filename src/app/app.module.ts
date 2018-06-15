import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { RefreshComponent } from './components/refresh/refresh.component';


const appRoutes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'refresh', component: RefreshComponent },
  { path: '**', redirectTo: '' }
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
    RefreshComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserModule,
    FormsModule,
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
