import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemInfo: object;
  itemNo: string;
  
  constructor( private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.route.params.
      subscribe ( params => {
        this.productosService.loadItem(params['id'])
          .subscribe( (resp: object) => {            
            this.itemInfo = resp;                    
            this.itemNo = params['id'];
        });      
      });
  }

}
