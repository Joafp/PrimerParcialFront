import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { JaulasComponent } from './jaulas/jaulas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'principal', component: PrincipalComponent },
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'jaulas',component:JaulasComponent},
  {path: 'reservas',component: ReservasComponent},
  {path: 'recepcion',component:RecepcionComponent}
];
