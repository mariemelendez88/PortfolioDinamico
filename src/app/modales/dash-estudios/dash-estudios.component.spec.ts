import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEstudiosComponent } from './dash-estudios.component';

describe('DashEstudiosComponent', () => {
  let component: DashEstudiosComponent;
  let fixture: ComponentFixture<DashEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
