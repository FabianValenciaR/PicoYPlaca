import { PlateValidationRequest } from './../models/plate-validation-req';
import { TestBed } from '@angular/core/testing';

import { PlateService } from './plate.service';

describe('PlateService', () => {
  let service: PlateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return canDrive = false because user has Pico&Placa', () =>{
    const plateValidationRequest: PlateValidationRequest = {
      plate: "AAA-0000", // Last digit 0
      daySelected: 5, // 5 = "Friday"
      timeSelected: "08:00" // 24h format
    }

    const canDrive = service.validatePicoPlaca(plateValidationRequest);
    expect(canDrive).toBe(false);
  });

});
