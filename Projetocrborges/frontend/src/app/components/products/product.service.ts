import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

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
}
