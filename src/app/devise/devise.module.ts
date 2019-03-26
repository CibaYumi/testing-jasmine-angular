import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ]
})
export class DeviseModule { }
