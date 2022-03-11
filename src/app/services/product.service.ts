import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_API_URL = environment.BASE_API_URL;


  constructor(private  http: HttpClient, private errorService: ErrorService) { }

  saveProducts(formdata: any){
    return this.http.post(this.BASE_API_URL + "/products", formdata)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      // console.log(response);
    }));

  }
}




