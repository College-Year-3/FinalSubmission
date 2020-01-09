import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FighterListComponent } from './fighter-list/fighter-list.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AddFighterComponent } from './add-fighter/add-fightercomponent';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignupComponent } from './signup/signup.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import 'firebase/app';
import 'firebase/auth';
// import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatListModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { NotificationService } from './service/notification.service';
import { DisplayClipartComponent } from './display-clipart/display-clipart.component';
import { FighterComponent } from './fighter/fighter.component';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login-v2';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login-v2';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import {LeftGloveComponent} from './welcome-screen/leftGloveComponent';
import {RightGloveComponent} from './welcome-screen/rightGloveComponent';
export function socialConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('app -id')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('app-id')
      }
    ]
  );
  return config;
}
library.add(faStar);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard] }, // home page
  { path: 'fighter-list', component: FighterListComponent, canActivate: [AuthGuard] },
  { path: 'add-fighter', component: AddFighterComponent, canActivate: [AuthGuard] },
  { path: 'pageNotFound', component: PageNotFoundComponent, canActivate: [AuthGuard] },
  { path: 'home', component: FighterListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'login', canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    FighterListComponent,
    AddFighterComponent,
    PageNotFoundComponent,
    ConvertToSpaces,
    StarRatingComponent,
    NavComponent,
    LoginComponent,
    NotificationsComponent,
    SignupComponent,
    DisplayClipartComponent,
    FighterComponent,
    WelcomeScreenComponent,
    LeftGloveComponent,
    RightGloveComponent
  ],
  imports: [
    AngularFireAuthModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FontAwesomeModule,
    LazyLoadImageModule
  ],
  providers: [{ provide: LocationStrategy,  useClass: HashLocationStrategy } , AuthService, AuthGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
