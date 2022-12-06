import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReferenciasComponent } from './dash-referencias.component';

describe('DashReferenciasComponent', () => {
  let component: DashReferenciasComponent;
  let fixture: ComponentFixture<DashReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashReferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
