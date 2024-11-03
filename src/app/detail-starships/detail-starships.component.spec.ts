import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailStarshipsComponent } from './detail-starships.component';
import { ServicioService } from '../service/servicio.service';

describe('DetailStarshipsComponent', () => {
  let component: DetailStarshipsComponent;
  let fixture: ComponentFixture<DetailStarshipsComponent>;

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: (key: string) => {
            if (key === 'id') {
              return '1';
            }
            return null;
          }
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [DetailStarshipsComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        ServicioService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
