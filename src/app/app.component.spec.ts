import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-carousel-lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { DeviseModule } from './devise/devise.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './devise/login/login.component';
import { RegisterComponent } from './devise/register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { CardsComponent } from './home/home-layout/cards/cards.component';

describe('AppComponent', () => {

  const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        MatInputModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DeviseModule,
        SharedModule,
        BrowserModule,
        FormsModule,
        CarouselModule,
        NgbModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        HomeLayoutComponent,
        CardsComponent,
        FooterComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'}
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'praxio-test-new'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('praxio-test-new');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to praxio-test-new!');
  });
});
