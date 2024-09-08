import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-recepcion',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './recepcion.component.html',
  styleUrl: './recepcion.component.css'
})
export class RecepcionComponent implements OnInit {
  turnos: any[] = [];
  turnosDetalles: any[] = [];
  jaulas: { idJaula: number, nombre: string, enUso: string }[] = [];
  productosDetalles: { nombre: string, cantidad: number }[] = [];
  selectedFecha: string = new Date().toISOString().split('T')[0];
  jaulasDisponibles: { idJaula: number, nombre: string, enUso: string }[] = [];
  selectedTurno: any = null;
  turnoSeleccionadoParaRecepcion: any = null;
  jaulaSeleccionada: number | null = null;
  horaActual: string = new Date().toISOString().split('T')[1].substring(0, 5);
  popupVisible: boolean = false;
  popupDetallesVisible: boolean = false;
  selectedJaulaId: number | null = null;
  proveedores: { idProveedor: number, nombre: string }[] = [];
  turnosOriginales: any[] = [];
  constructor() { }

  ngOnInit() {
    this.turnos = [
      { idTurno: 1, fecha: '2024-09-04', horaInicioAgendamiento: '08:00', idProveedor: 1, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null },
      { idTurno: 2, fecha: '2024-09-05', horaInicioAgendamiento: '09:00', idProveedor: 2, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null },
      { idTurno: 3, fecha: '2024-09-06', horaInicioAgendamiento: '10:00', idProveedor: 3, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null },
      { idTurno: 4, fecha: '2024-09-07', horaInicioAgendamiento: '11:00', idProveedor: 4, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null },
      { idTurno: 5, fecha: '2024-09-08', horaInicioAgendamiento: '12:00', idProveedor: 5, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null },
      { idTurno: 6, fecha: '2024-09-09', horaInicioAgendamiento: '13:00', idProveedor: 1, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null },
      { idTurno: 7, fecha: '2024-09-10', horaInicioAgendamiento: '14:00', idProveedor: 2, idJaula: null, horaInicioRecepcion: null, horaFinRecepcion: null }
    ];
    this.turnosOriginales = [...this.turnos];
    this.jaulas = [
      { idJaula: 1, nombre: 'Jaula A', enUso: 'N' },
      { idJaula: 2, nombre: 'Jaula B', enUso: 'N' },
      { idJaula: 3, nombre: 'Jaula C', enUso: 'N' }
    ];
    this.proveedores = [
      { idProveedor: 1, nombre: 'Proveedor 1' },
      { idProveedor: 2, nombre: 'Proveedor 2' },
      { idProveedor: 3, nombre: 'Proveedor 3' },
      { idProveedor: 4, nombre: 'Proveedor 4' },
      { idProveedor: 5, nombre: 'Proveedor 5' }
    ];
  }

  mostrarSelectorJaula(turno: any) {
    this.turnoSeleccionadoParaRecepcion = turno;
    this.jaulasDisponibles = this.jaulas.filter(jaula => jaula.enUso === 'N');
    this.popupVisible = true;
  }

  seleccionarJaula(jaula: any) {
    this.selectedJaulaId = jaula.idJaula;
  }

  confirmarSeleccion() {
    if (this.selectedJaulaId !== null && this.turnoSeleccionadoParaRecepcion) {
      this.iniciarRecepcion(this.selectedJaulaId);
      this.cerrarPopup();
    }
  }

  cerrarPopup() {
    this.popupVisible = false;
    this.selectedJaulaId = null;
    this.turnoSeleccionadoParaRecepcion = null;
  }

  verDetalles(turno: any) {
    this.selectedTurno = turno;
    this.productosDetalles = this.generarProductosDetalles(); // Genera detalles de productos
    this.popupDetallesVisible = true;
  }

  cerrarPopupDetalles() {
    this.popupDetallesVisible = false;
    this.selectedTurno = null;
  }

  generarProductosDetalles() {
    const productos = [
      'Arroz', 'Lentejas', 'Harina', 'Azúcar', 'Aceite', 'Leche', 'Pasta', 'Cereal', 'Conservas'
    ];
    return Array.from({ length: 3 }, (_, i) => ({
      nombre: productos[i % productos.length],
      cantidad: Math.floor(Math.random() * 100) + 1
    }));
  }

  iniciarRecepcion(jaulaId: number) {
    const turno = this.turnoSeleccionadoParaRecepcion;
    const jaula = this.jaulas.find(j => j.idJaula === jaulaId);
    if (jaula) {
      jaula.enUso = 'S';
      turno.idJaula = jaulaId;
      turno.horaInicioRecepcion = this.obtenerHoraActual();
    } else {
      alert('No hay jaulas libres disponibles.');
    }
  }

  finalizarRecepcion(turno: any) {
    const jaula = this.jaulas.find(j => j.idJaula === turno.idJaula);
    if (jaula) {
      jaula.enUso = 'N';
      turno.horaFinRecepcion = this.horaActual;
    }
  }

  filtrarTurnos() {
    console.log('Fecha de filtro:', this.selectedFecha);
    console.log('Fechas de turnos:', this.turnos.map(turno => turno.fecha));
    this.turnos = this.turnosOriginales.filter(turno => turno.fecha === this.selectedFecha);
  }

  borrarFiltro() {
    this.turnos = [...this.turnosOriginales]; // Restablecer turnos a su estado original
  }

  getJaulaNombre(idJaula: number): string {
    const jaula = this.jaulas.find(jaula => jaula.idJaula === idJaula);
    return jaula ? jaula.nombre : 'Desconocida';
  }

  getEstadoTurno(turno: any): string {
    if (turno.horaFinRecepcion) {
      return 'Completado';
    } else if (turno.horaInicioRecepcion) {
      return 'En Recepción';
    } else {
      return 'Pendiente';
    }
  }
  getProveedorNombre(idProveedor: number): string {
    const proveedor = this.proveedores.find(proveedor => proveedor.idProveedor === idProveedor);
    return proveedor ? proveedor.nombre : 'Desconocido';
  }
  cancelarSeleccion() {
    this.turnoSeleccionadoParaRecepcion = null;
  }

  obtenerHoraActual(): string {
    return new Date().toISOString().split('T')[1].substring(0, 5);
  }
}
