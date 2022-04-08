import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }
  grand_total:FormControl = new FormControl();

  setGrandTotalControl(val) {
    this.grand_total.setValue(val);
  }

  getGrandTotalControl() {
    return this.grand_total;
  }

}
