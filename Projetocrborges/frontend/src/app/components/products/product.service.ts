import { Product } from './product.model';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl= 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    
    ) { }

  showOnConsole(msg: string) : void{
    console.log(msg)
  }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  readByIdid(id: string): Observable<Product>{
    const URL= `${this.baseUrl}/${id}`
    return this.http.get<Product>(this.baseUrl);
  }

  update (product: Product): Observable<Product>{
    const URL= `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(this.baseUrl,product);
  }

}
