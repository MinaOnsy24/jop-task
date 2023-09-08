import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBookingComponent } from './type-booking.component';

describe('TypeBookingComponent', () => {
  let component: TypeBookingComponent;
  let fixture: ComponentFixture<TypeBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeBookingComponent]
    });
    fixture = TestBed.createComponent(TypeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
