import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Variable that will store the plate identifier as string
  plate: string = 'AAA-0000';
  // Variable that will store the date and time selected
  currentDate: Date = new Date();
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


  constructor() {}

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
}
