import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-carousel-lib';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { DeviseModule } from './devise/devise.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { CardsComponent } from './home/home-layout/cards/cards.component';
import { FooterComponent } from './home/footer/footer.component';
import { ShowHidePasswordDirective } from './devise/login/password.directive';


@NgModule({
  imports: [
    DeviseModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    CarouselModule,
    RouterModule,
    MatInputModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ShowHidePasswordDirective
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeLayoutComponent,
    CardsComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
