import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPerfilComponent } from './dash-perfil.component';

describe('DashPerfilComponent', () => {
  let component: DashPerfilComponent;
  let fixture: ComponentFixture<DashPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
