import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOCreationComponent } from './focreation.component';

describe('FOCreationComponent', () => {
  let component: FOCreationComponent;
  let fixture: ComponentFixture<FOCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
