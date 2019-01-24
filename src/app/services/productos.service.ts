import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  info: any[] = [];  
  filteredInfo: any[] = [];  
  cargando: boolean = true;  

  constructor(private http: HttpClient) {
    this.loadInfo();
   }

  public loadInfo() {
    return new Promise((resolve, reject) => {
      //Leer firebase
      this.http.get('https://angular-test-33.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any[]) => {        
        this.info = resp;
        //Visualize loading html longer:
        setTimeout(() => {
          this.cargando = false;          
        }, 700);
        resolve();
      }); 
    });       
  } 
  
  public loadItem(itemNo: number) {    
    return this.http.get('https://angular-test-33.firebaseio.com/productos/prod-' + itemNo + '.json');      
  }

  public filterInfo(que: string) {
    //Products have to be loaded first! (logic is in search component)
    que = que.toLocaleLowerCase();    
    this.filteredInfo = this.info.filter(producto => {
      let tituloLow = producto.titulo.toLocaleLowerCase();
      return (producto.categoria.indexOf(que) >= 0 || tituloLow.indexOf(que) >= 0 );
    });
  } 
}
