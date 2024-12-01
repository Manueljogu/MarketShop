import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  products: any[] = [];
  error: string | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProducts().subscribe({
      next: (data: any) => { // Cambia `data` a un tipo adecuado si lo conoces
        this.products = data;
        console.log('Productos:', this.products);
      },
      error: (err: any) => { // Cambia `err` a un tipo adecuado si lo conoces
        this.error = 'No se pudieron cargar los productos.';
        console.error(err);
      },
    });
  }
}