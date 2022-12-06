import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRedesComponent } from './dash-redes.component';

describe('DashRedesComponent', () => {
  let component: DashRedesComponent;
  let fixture: ComponentFixture<DashRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
