import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  viewOptions: string[] = ['Card-View', 'Grid-View'];
  selectedView = this.viewOptions[0];
  isDropDown = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeDropdownValue(arg: any) {
    this.selectedView = arg.addedItems[0];
    this.isDropDown = false;
  }

}