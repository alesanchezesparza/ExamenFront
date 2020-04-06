import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Producto } from 'src/app/modelo/Producto';

@Component({
  selector: 'app-buscar-id',
  templateUrl: './buscar-id.component.html',
  styleUrls: ['./buscar-id.component.css']
})
export class BuscarIdComponent implements OnInit {

  producto:Producto= new Producto;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  buscarId(producto:Producto){
    this.service.getProductoId(producto) 
    .subscribe(data=>{
    })
  }

}
