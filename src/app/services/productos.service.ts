import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  info: any[] = [];
  cargando: boolean = true;  
  constructor(private http: HttpClient) {
    this.loadInfo();
   }
   private loadInfo() {
    //Leer firebase
    this.http.get('https://angular-test-33.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any[]) => {        
        this.info = resp;
        //Visualize loading html longer:
        setTimeout(() => {
          this.cargando = false;          
        }, 1500);
        
      });    
  }
}
