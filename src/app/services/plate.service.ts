import { Injectable } from '@angular/core';
import { RestrictionDay } from 'src/app/models/restriction-day';
import { PlateValidationRequest } from 'src/app/models/plate-validation-req';
@Injectable({
  providedIn: 'root',
})
export class PlateService {
  // Stores the restrictions rules for Pico&Placa
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

  /**
   *Service that returns whether the user can be driving
   *
   * @param {PlateValidationRequest} plateValidationReq
   * @return {*}  {boolean}
   * @memberof PlateService
   */
  validatePicoPlaca(plateValidationReq: PlateValidationRequest): boolean {
    console.log("Logger:", "Receiving object on service")
    let canDrive: boolean;
    let lastDigit: number = Number(
      plateValidationReq.plate.charAt(plateValidationReq.plate.length - 1)
    );
    // Get the restriction day by plate's last digit
    let restrictedDay = this.restrictionDays.find((d) =>
      d.lastDigits.includes(lastDigit)
    ).id;

    console.log("Logger:", "Starting validations")
    // Validate hours and restrictedDay
    if (
      (plateValidationReq.timeSelected >= '07:00:00' &&
        plateValidationReq.timeSelected <= '09:30:00' &&
        restrictedDay == plateValidationReq.daySelected) ||
      (plateValidationReq.timeSelected >= '16:00:00' &&
        plateValidationReq.timeSelected <= '19:30:00' &&
        restrictedDay == plateValidationReq.daySelected)
    ) {
      canDrive = false;
    } else {
      canDrive = true;
    }
    console.log("Logger:", "Returning validation")
    return canDrive;
  }
}
