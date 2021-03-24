import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPlanningS1Component } from './fplanning-s1.component';

describe('FPlanningS1Component', () => {
  let component: FPlanningS1Component;
  let fixture: ComponentFixture<FPlanningS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPlanningS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPlanningS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
