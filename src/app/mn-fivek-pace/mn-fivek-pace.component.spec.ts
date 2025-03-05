import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnFivekPaceComponent } from './mn-fivek-pace.component';

describe('MnFivekPaceComponent', () => {
  let component: MnFivekPaceComponent;
  let fixture: ComponentFixture<MnFivekPaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnFivekPaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnFivekPaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
