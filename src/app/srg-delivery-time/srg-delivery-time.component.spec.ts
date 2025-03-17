import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrgDeliveryTimeComponent } from './srg-delivery-time.component';

describe('SrgDeliveryTimeComponent', () => {
  let component: SrgDeliveryTimeComponent;
  let fixture: ComponentFixture<SrgDeliveryTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrgDeliveryTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrgDeliveryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
