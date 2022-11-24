import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSOlicitudesComponent } from './listar-solicitudes.component';

describe('ListarSOlicitudesComponent', () => {
  let component: ListarSOlicitudesComponent;
  let fixture: ComponentFixture<ListarSOlicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSOlicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSOlicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
