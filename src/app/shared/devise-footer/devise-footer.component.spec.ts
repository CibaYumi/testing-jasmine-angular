import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseFooterComponent } from './devise-footer.component';

describe('DeviseFooterComponent', () => {
  let component: DeviseFooterComponent;
  let fixture: ComponentFixture<DeviseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
