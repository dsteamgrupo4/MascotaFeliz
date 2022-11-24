import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministraSolicitudesComponent } from './administra-solicitudes.component';

describe('AdministraSolicitudesComponent', () => {
  let component: AdministraSolicitudesComponent;
  let fixture: ComponentFixture<AdministraSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministraSolicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministraSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
