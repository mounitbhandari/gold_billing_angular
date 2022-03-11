import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
// import Swal from 'sweetalert2';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  userObject: any;

  isProduction = environment.production;

  private validatorError: any;


  productFormGroup= new FormGroup({
    id: new FormControl(),
    companyId: new FormControl(),
    productName: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
    description: new FormControl(null, [Validators.maxLength(100)]),
  });

  constructor( private storage: StorageMap, private productService: ProductService) { }

  ngOnInit(): void {

    this.storage.get('userObject').subscribe((userObject) => {
      this.userObject = userObject;
      this.productFormGroup.patchValue({companyId: this.userObject.company.companyId});
    });
  }

  // saveManualResult(){

  //   this.validatorError = null;
  //   Swal.fire({
  //     title: 'Confirmation',
  //     text: 'Do you sure to save this result?',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, save It!'
  //   }).then((result: any) => {
  //     if (result.isConfirmed){
  //       this.productService.saveProducts(this.productFormGroup.value).subscribe(response => {
  //         if (response.success === 1){
  //           // @ts-ignore
  //           Swal.fire({
  //             position: 'top-end',
  //             icon: 'success',
  //             title: 'Result saved',
  //             showConfirmButton: false,
  //             timer: 1000
  //           });
  //           this.productFormGroup.reset();
  //         }else{
  //           this.validatorError = response.error;
  //           Swal.fire({
  //             position: 'top-end',
  //             icon: 'error',
  //             title: 'Validation error',
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }, (error) => {
  //         // when error occured
  //         console.log('data saving error', error);
  //       });
  //     }
  //   });
  // }

}
