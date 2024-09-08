import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {
  // Datos de ejemplo o servicios para obtener datos reales
  proveedores: { idProveedor: number, nombre: string }[] = [];
  jaulas: { idJaula: number, nombre: string }[] = [];
  productos: { idProducto: number, nombre: string }[] = [];
  horas: string[] = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00'
  ];

  reservaCabecera = {
    idTurno: 0,
    fecha: '',
    horaInicioAgendamiento: '',
    horaFinAgendamiento: '',
    idProveedor: 0,
    idJaula: 0,
    horaInicioRecepcion: '',
    horaFinRecepcion: ''
  };

  reservaDetalle = {
    idTurno: 0,
    detalles: [{ idProducto: 0, cantidad: 0 }]
  };

  constructor() { }

  ngOnInit() {
    // Inicializar datos de ejemplo o realizar llamadas a servicios para obtener datos
    this.proveedores = [
      { idProveedor: 1, nombre: 'Proveedor A' },
      { idProveedor: 2, nombre: 'Proveedor B' }
    ];
    this.jaulas = [
      { idJaula: 1, nombre: 'Jaula A' },
      { idJaula: 2, nombre: 'Jaula B' }
    ];
    this.productos = [
      { idProducto: 1, nombre: 'Producto A' },
      { idProducto: 2, nombre: 'Producto B' }
    ];
  }

  agregarDetalle() {
    this.reservaDetalle.detalles.push({ idProducto: 0, cantidad: 0 });
  }

  eliminarDetalle(index: number) {
    this.reservaDetalle.detalles.splice(index, 1);
  }

  registrarReserva() {
    // Lógica para registrar la reserva (cabecera y detalle)
    console.log('Reserva registrada:', this.reservaCabecera, this.reservaDetalle);
  }
}
