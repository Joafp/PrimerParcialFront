import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jaulas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jaulas.component.html',
  styleUrl: './jaulas.component.css'
})
export class JaulasComponent implements OnInit {
  jaulas: { idJaula: number, nombre: string, enUso: 'S' | 'N' }[] = [];
  filteredJaulas: { idJaula: number, nombre: string, enUso: 'S' | 'N' }[] = [];
  nombreFiltro: string = '';

  ngOnInit() {
    // Inicializar con datos de ejemplo o realizar una llamada a un servicio
    this.jaulas = [
      { idJaula: 1, nombre: 'Jaula A', enUso: 'S' },
      { idJaula: 2, nombre: 'Jaula B', enUso: 'N' },
      { idJaula: 3, nombre: 'Jaula C', enUso: 'S' }
    ];
    this.filteredJaulas = this.jaulas;
  }

  filtrarPorNombre() {
    if (this.nombreFiltro) {
      this.filteredJaulas = this.jaulas.filter(jaula =>
        jaula.nombre.toLowerCase().includes(this.nombreFiltro.toLowerCase())
      );
    } else {
      this.filteredJaulas = this.jaulas;
    }
  }

  agregarJaula() {
    // Lógica para agregar jaula
  }

  editarJaula(id: number) {
    // Lógica para editar jaula
  }

  eliminarJaula(id: number) {
    this.jaulas = this.jaulas.filter(j => j.idJaula !== id);
    this.filtrarPorNombre(); // Refiltrar la lista después de eliminar
  }
}
