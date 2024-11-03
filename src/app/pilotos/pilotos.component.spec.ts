import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PilotosComponent } from './pilotos.component';
import { ServicioService } from '../service/servicio.service';


describe('PilotosComponent', () => {
  let component: PilotosComponent;
  let fixture: ComponentFixture<PilotosComponent>;
  let servicioServiceMock: jasmine.SpyObj<ServicioService>;

  beforeEach(async () => {
    servicioServiceMock = jasmine.createSpyObj('ServicioService', ['obtenerPiloto']);

    await TestBed.configureTestingModule({
      imports: [PilotosComponent],
      providers: [
        { provide: ServicioService, useValue: servicioServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PilotosComponent);
    component = fixture.componentInstance;
  });

  it('debería cargar los pilotos en ngOnInit cuando se proporcionan URLs en pilotosUrls', () => {
    const pilotosUrls = ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/'];
    component.pilotosUrls = pilotosUrls;

    servicioServiceMock.obtenerPiloto.and.callFake((url: string) => {
      return of({ name: 'Nombre Piloto', url });
    });

    component.ngOnInit();

    expect(servicioServiceMock.obtenerPiloto).toHaveBeenCalledTimes(pilotosUrls.length);
    expect(component.pilotos.length).toBe(pilotosUrls.length);
    expect(component.pilotos[0].name).toBe('Nombre Piloto');
  });
});
