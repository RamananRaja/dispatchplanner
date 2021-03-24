import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPlanningS2Component } from './fplanning-s2.component';

describe('FPlanningS2Component', () => {
  let component: FPlanningS2Component;
  let fixture: ComponentFixture<FPlanningS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPlanningS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPlanningS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
