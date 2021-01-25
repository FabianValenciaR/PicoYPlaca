import { PlateService } from './services/plate.service';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  const service = new PlateService();
  const component = new AppComponent(service);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call service to validate Pico&Paca', () => {
    const spy = spyOn(service, 'validatePicoPlaca').and.callFake( res => {
      return true;
    });
    component.validatePicoPlaca();
    expect(spy).toHaveBeenCalled();
  });

  it('should return isInitialValid = false because ecuadorian plates cannot begin with the letter D', () =>{
    component.plate = "DDD-0000";

    component.validatePlateInitial();

    expect(component.isInitialValid).toBe(false);
  });

});
