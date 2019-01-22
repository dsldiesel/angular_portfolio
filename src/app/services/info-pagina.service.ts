import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada: boolean = false;  
  constructor(private http: HttpClient) { 
    this.loadInfo();
  }
  private loadInfo() {
    //Leer mock
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {        
        this.info = resp;
        this.cargada = true;
      });
    this.populateTeam();
  }
  private populateTeam() {
    //Leer firebase json
    this.http.get('https://angular-test-33.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {        
        this.info.equipo_trabajo = resp; 
        //console.log(this.info.equipo_trabajo);
      })
  }
}
