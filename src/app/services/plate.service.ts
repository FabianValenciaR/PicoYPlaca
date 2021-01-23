import { Injectable } from '@angular/core';
import { RestrictionDay } from '../models/restriction-day';
@Injectable({
  providedIn: 'root',
})
export class PlateService {
  canDrive: boolean = false;
  restrictionDays: RestrictionDay[] = [
    {
      id: 1,
      day: 'Monday',
      lastDigits: [1, 2],
    },
    {
      id: 2,
      day: 'Tuesday',
      lastDigits: [3, 4],
    },
    {
      id: 3,
      day: 'Wednesday',
      lastDigits: [5, 6],
    },
    {
      id: 4,
      day: 'Thursday',
      lastDigits: [7, 8],
    },
    {
      id: 5,
      day: 'Friday',
      lastDigits: [9, 0],
    },
  ];

  constructor() {}

  validatePicoPlaca(plate: string, selectedDate: Date): boolean {
    let lastDigit: number = Number(plate.charAt(plate.length - 1));
    let daySelected: number = selectedDate.getDay();
    let timeSelected = selectedDate.toLocaleTimeString('EC-ec', {
      hour12: false,
    });

    // Get the restriction day by plate's last digit
    let restrictedDay = this.restrictionDays.find((d) =>
      d.lastDigits.includes(lastDigit)
    ).id;

    // Validate hours and restrictedDay
    if (
      (timeSelected >= '07:00:00' &&
        timeSelected <= '09:30:00' &&
        restrictedDay == daySelected) ||
      (timeSelected >= '16:00:00' &&
        timeSelected <= '19:30:00' &&
        restrictedDay == daySelected)
    ) {
      this.canDrive = false;
    } else {
      this.canDrive = true;
    }
    return this.canDrive;
  }
}
