import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

import {ConfirmationService, MessageService, PrimeNGConfig} from "primeng/api";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ConfirmationService, MessageService,DatePipe]
})
export class ProductComponent implements OnInit {

  userObject: any;
  errorMessage: any;
  showErrorMessage: boolean = false;
  isProduction = environment.production;
  msgs: { severity: string; summary: string; detail: string }[] = [];
  products: any[] = [];

  private validatorError: any;


  productFormGroup= new FormGroup({
    id: new FormControl(),
    companyId: new FormControl(),
    productName: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(4)]),
    description: new FormControl(null, [Validators.maxLength(100)]),
  });
  productList: any;

  constructor( private storage: StorageMap
               , private productService: ProductService
               , private confirmationService: ConfirmationService
               , private primengConfig: PrimeNGConfig
               , private messageService: MessageService
               , private route: ActivatedRoute
              ) {
    this.route.data.subscribe((response: any) => {
      this.productList = response.productResolver.products.data;
    });

  }

  ngOnInit(): void {

    this.storage.get('userObject').subscribe((userObject) => {
      this.userObject = userObject;
      this.productFormGroup.patchValue({companyId: this.userObject.company.companyId});
    });

    this.productService.fetchAllProducts().subscribe(result=>{
      //console.log('result',result);
      this.products = result.data;
      console.log('result',this.products);
    });

  }

  showSuccess(successMessage: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: successMessage});
  }
  showError(message: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }

  saveProduct(){
    this.confirmationService.confirm({
      message: 'Do you want to save the product?',
      header: 'Save Product Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        //const index: number = this.myArray.indexOf(value);
        //this.myArray.splice(index, 1);

        this.productService.saveProducts(this.productFormGroup.value).subscribe(response => {
          if (response.status === true){
            // console.log("proucts response", response);
            //unshift for add item to the first position in list
            this.products.unshift(response.data);
            //unshift for add item to the last position in list
            // this.products.push(response.data);
            this.showSuccess("Record added successfully");
          }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;
          const alerts: Alert[] = [{
            type: 'success',
            message: this.errorMessage,
          }]
          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);
          this.showError(error.statusText);
        })

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

}
