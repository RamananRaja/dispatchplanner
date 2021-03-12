import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOListComponent } from './folist.component';

describe('FOListComponent', () => {
  let component: FOListComponent;
  let fixture: ComponentFixture<FOListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
