export class RestrictionDay {
  id: number;
  day: string;
  lastDigits: number[];
  constructor(id?: number, day?: string, lastDigit?: number[]) {
    this.id = id ? id : null;
    this.day = day ? day : '';
    this.lastDigits = lastDigit ? lastDigit : [];
  }
}
