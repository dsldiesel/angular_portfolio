import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _datos: InfoPaginaService,
              private router: Router) { 

  }
  ngOnInit() {
  }

  public searchProd(que:string){
    if (que.length < 1) {
      return;
    }
    this.router.navigate(['/search', que]);
  }

}
