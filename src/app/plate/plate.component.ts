import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit {
  // Input that will receive the plate identifier from a parent component
  @Input() plate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
