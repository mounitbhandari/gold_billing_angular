import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';
import {CommonService} from "./common.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_API_URL = environment.BASE_API_URL;


  constructor(private  http: HttpClient, private errorService: ErrorService, private commonService: CommonService) { }

  saveProducts(formdata: any){
    return this.http.post<{status: boolean, message: string, data: any}>(this.commonService.getAPI() + "/products", formdata)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      // console.log(response);
    }));

  }
}




