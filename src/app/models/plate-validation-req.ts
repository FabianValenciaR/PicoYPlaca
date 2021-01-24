export class PlateValidationRequest {
  plate: string;
  daySelected: number;
  timeSelected: string;
  constructor(plate?: string, daySelected?: number, timeSelected?: string) {
    this.plate = plate ? plate : '';
    this.daySelected = daySelected ? daySelected : null;
    this.timeSelected = timeSelected ? timeSelected : '';
  }
}
