import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgbMagic8BallComponent } from './jgb-magic-8-ball.component';

describe('JgbMagic8BallComponent', () => {
  let component: JgbMagic8BallComponent;
  let fixture: ComponentFixture<JgbMagic8BallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JgbMagic8BallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JgbMagic8BallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
