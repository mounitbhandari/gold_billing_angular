import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {forkJoin} from "rxjs";
import {ProductService} from "../services/product.service";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<boolean> {
  constructor(private productService: ProductService ){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    // const a = this.jobTaskService.getAll();
    const b = this.productService.fetchAllProducts();
    const join = forkJoin(b).pipe(map((allResponses) => {
      return {
        products: allResponses[0]
      };
    }));
    return join;
  }
}
