import { Component, OnInit } from '@angular/core';
import {  CommonserviceService} from '../../commonservice.service';


@Component({
  selector: 'app-componet3',
  templateUrl: './componet3.component.html',
  styleUrls: ['./componet3.component.css']
})
export class Componet3Component implements OnInit {

  constructor(private datatransfer : CommonserviceService) { }
  totalamount = 0
  subtotal = 20
  shipping = 5
  tax = 3


  ngOnInit(): void {

    this.datatransfer.getGrandTotalControl().valueChanges.subscribe((data) => {
      if (data) {
        this.totalamount = data + this.subtotal + this.shipping + this.tax
      }
    });
  }

}
