import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProyectosComponent } from './dash-proyectos.component';

describe('DashProyectosComponent', () => {
  let component: DashProyectosComponent;
  let fixture: ComponentFixture<DashProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
