import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los productos
  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Método para obtener un producto por ID
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
