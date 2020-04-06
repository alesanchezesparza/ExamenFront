import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Producto } from 'src/app/modelo/Producto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  producto:Producto = new Producto;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  guardar(producto:Producto){
    this.service.createProductos(producto)
    .subscribe(data=>{
      alert("Producto guardado con Exito!!");
      this.router.navigate(["listar"]);
    })
  }

}
