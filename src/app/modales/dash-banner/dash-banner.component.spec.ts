import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBannerComponent } from './dash-banner.component';

describe('DashBannerComponent', () => {
  let component: DashBannerComponent;
  let fixture: ComponentFixture<DashBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
