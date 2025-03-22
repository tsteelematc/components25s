import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaReviewComponent } from './pizza-review.component';

describe('PizzaReviewComponent', () => {
  let component: PizzaReviewComponent;
  let fixture: ComponentFixture<PizzaReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
