import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {  CommonserviceService} from '../../commonservice.service';


@Component({
  selector: 'app-componet2',
  templateUrl: './componet2.component.html',
  styleUrls: ['./componet2.component.css'],
})
export class Componet2Component implements OnInit {
  constructor(public fb: FormBuilder, private datatransfer : CommonserviceService) {}
  public stock_form: FormGroup;
  total = 0
  grandtotal
  get_all_total = ""
  @Input() toy_title:string

  // functions

  onSubmit() {
    console.log(this.stock_form.get("stockCount").value);
    this.total = this.stock_form.get("stockCount").value * 10
    this.get_all_total = sessionStorage.getItem("grandTotal")
    this.grandtotal = this.total + parseInt(this.get_all_total)
    sessionStorage.setItem("grandTotal", String(this.grandtotal))
    this.datatransfer.setGrandTotalControl(this.grandtotal)
  }

  ngOnInit(): void {
    sessionStorage.setItem("grandTotal", String(0))
    this.stock_form = this.fb.group({
      stockCount: new FormControl(0, [Validators.required]),
    });
  }
}
