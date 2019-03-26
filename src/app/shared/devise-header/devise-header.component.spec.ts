import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseHeaderComponent } from './devise-header.component';

describe('DeviseHeaderComponent', () => {
  let component: DeviseHeaderComponent;
  let fixture: ComponentFixture<DeviseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
