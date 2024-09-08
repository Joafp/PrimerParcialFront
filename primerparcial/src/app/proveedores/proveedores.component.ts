import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})


export class ProveedoresComponent implements OnInit {
  proveedores: { idProveedor: number, nombre: string }[] = [];
  filteredProveedores: { idProveedor: number, nombre: string }[] = [];
  nombreFiltro: string = '';
   ngOnInit(): void {
      // Inicializar con datos de ejemplo o realizar una llamada a un servicio
    this.proveedores = [
      { idProveedor: 1, nombre: 'Proveedor A' },
      { idProveedor: 2, nombre: 'Proveedor B' },
      { idProveedor: 3, nombre: 'Proveedor C' }
    ];
    this.filteredProveedores = this.proveedores;
   }

   filtrarPorNombre() {
    if (this.nombreFiltro) {
      this.filteredProveedores = this.proveedores.filter(proveedor =>
        proveedor.nombre.toLowerCase().includes(this.nombreFiltro.toLowerCase())
      );
    } else {
      this.filteredProveedores = this.proveedores;
    }
  }

  agregarProveedor() {
    // Lógica para agregar proveedor
  }

  editarProveedor(id: number) {
    // Lógica para editar proveedor
  }

  eliminarProveedor(id: number) {
    this.proveedores = this.proveedores.filter(p => p.idProveedor !== id);
    this.filtrarPorNombre(); // Refiltrar la lista después de eliminar
  }
}
