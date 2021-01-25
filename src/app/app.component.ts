import { Component, OnInit } from '@angular/core';
import { PlateService } from 'src/app/services/plate.service';
import { PlateValidationRequest } from 'src/app/models/plate-validation-req';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  canDrive: boolean = true;
  // Variable that will store the plate identifier as string
  plate: string = 'AAA-0000';
  // Variable that will store the date selected
  selectedDate: Date = new Date();
  // Variable that will store the time selected
  selectedTime: Date = new Date();
  // Flag that indicates if the initial letter of the plate is valid
  isInitialValid: boolean = true;
  // Array that has all the valid first letters of a ecuadorian plate
  validInitials: string[] = [
    'A',
    'B',
    'U',
    'C',
    'H',
    'X',
    'O',
    'E',
    'W',
    'G',
    'I',
    'L',
    'R',
    'M',
    'V',
    'N',
    'Q',
    'S',
    'P',
    'Y',
    'J',
    'K',
    'T',
    'Z',
  ];

  constructor(private plateService: PlateService) {}

  ngOnInit(): void {
    this.validatePicoPlaca();
  }

  /**
   *Validates that the initial letter of the plate is a valid one
   *
   * @memberof AppComponent
   */
  validatePlateInitial() {
    let plateInitial = this.plate.toUpperCase().charAt(0);
    if (this.validInitials.indexOf(plateInitial) !== -1) {
      this.isInitialValid = true;
    } else {
      this.isInitialValid = false;
    }
  }

  /**
   *Sends the request to plate.service to validate Pico&Placa
   *
   * @memberof AppComponent
   */
  validatePicoPlaca() {
    console.log("Logger:", "Building object and sending it to the service validator")
    let plateValidationReq: PlateValidationRequest = {
      plate: this.plate,
      daySelected: this.selectedDate.getDay(),
      timeSelected: this.selectedTime.toLocaleTimeString('EC-ec', {
        hour12: false,
      }),
    };

    this.canDrive = this.plateService.validatePicoPlaca(plateValidationReq);
  }
}
