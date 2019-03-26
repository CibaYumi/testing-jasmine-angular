import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviseHeaderComponent } from './devise-header/devise-header.component';
import { DeviseFooterComponent } from './devise-footer/devise-footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DeviseHeaderComponent,
    DeviseFooterComponent
  ],
  exports: [
    DeviseHeaderComponent,
    DeviseFooterComponent
  ]
})
export class SharedModule { }
