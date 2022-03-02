import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productFormGroup= new FormGroup({
    id: new FormControl(),
    companyId: new FormControl(),
    productName: new FormControl(),
    description: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
