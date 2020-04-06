import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/app21/productos';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  getProductoId(producto:Producto){
    return this.http.get<Producto[]>(this.Url+"/"+producto.item);
  }

  createProductos(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.item);
  }
}
