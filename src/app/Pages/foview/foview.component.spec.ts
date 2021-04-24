import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoviewComponent } from './foview.component';

describe('FoviewComponent', () => {
  let component: FoviewComponent;
  let fixture: ComponentFixture<FoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
