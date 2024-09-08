import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos: { idProducto: number, nombre: string }[] = [];
  filteredProductos: { idProducto: number, nombre: string }[] = [];
  nombreFiltro: string = '';

  ngOnInit() {
    // Inicializar con datos de ejemplo o realizar una llamada a un servicio
    this.productos = [
      { idProducto: 1, nombre: 'Producto A' },
      { idProducto: 2, nombre: 'Producto B' },
      { idProducto: 3, nombre: 'Producto C' }
    ];
    this.filteredProductos = this.productos;
  }

  filtrarPorNombre() {
    if (this.nombreFiltro) {
      this.filteredProductos = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(this.nombreFiltro.toLowerCase())
      );
    } else {
      this.filteredProductos = this.productos;
    }
  }

  agregarProducto() {
    // Lógica para agregar producto
  }

  editarProducto(id: number) {
    // Lógica para editar producto
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.idProducto !== id);
    this.filtrarPorNombre(); // Refiltrar la lista después de eliminar
  }
}
