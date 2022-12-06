import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAcercademiComponent } from './dash-acercademi.component';

describe('DashAcercademiComponent', () => {
  let component: DashAcercademiComponent;
  let fixture: ComponentFixture<DashAcercademiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAcercademiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAcercademiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
