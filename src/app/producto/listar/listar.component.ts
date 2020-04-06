import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Producto } from 'src/app/modelo/Producto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  delete(producto:Producto){
    this.service.deleteProducto(producto) 
    .subscribe(data=>{
       this.productos=this.productos.filter(p=>p!==producto);
    })
  }

  
}
