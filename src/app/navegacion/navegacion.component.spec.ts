import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavegacionComponent } from './navegacion.component';
import { ActivatedRoute } from '@angular/router';

describe('NavegacionComponent', () => {
  let component: NavegacionComponent;
  let fixture: ComponentFixture<NavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionComponent, RouterModule.forRoot([])],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => null } } } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check authentication status on init', () => {
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'accessToken') {
        return 'mockAccessToken';
      }
      if (key === 'username') {
        return 'Test User';
      }
      return null;
    });
    component.ngOnInit();
    expect(component.isAuthenticated).toBeTrue();
    expect(component.username).toBe('Test User');
  });
});
