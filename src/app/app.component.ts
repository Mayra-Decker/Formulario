import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente = {
    id: 0,
    nombre: "",
    correo: ""
  }

  clientes = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juanperez@gmail.com' },
    { id: 2, nombre: 'Ana Gómez', correo: 'anagomez@hotmail.com' },
    { id: 3, nombre: 'Luis Martínez', correo: 'luismartinez@hotmail.com' },
    { id: 4, nombre: 'Laura Fernández', correo: 'laura@gmail.com' },
    { id: 5, nombre: 'Carlos López', correo: 'carlopez@gmail.com' },
  ];

  hayClientes() {
    return this.clientes.length > 0;
  }

  eliminar(id: number) {
    for (let x = 0; x < this.clientes.length; x++)
      if (this.clientes[x].id == id) {
        this.clientes.splice(x, 1);
        return;
      }
  }

  agregar() {
    if (this.cliente.id == 0) {
      alert('Debe ingresar un ID de cliente distinto a cero');
      return;
    }
    for (let x = 0; x < this.clientes.length; x++)
      if (this.clientes[x].id == this.cliente.id) {
        alert('Ya existe un cliente con dicho ID');
        return;
      }
    this.clientes.push({
      id: this.cliente.id,
      nombre: this.cliente.nombre,
      correo: this.cliente.correo
    });
    this.cliente.id = 0;
    this.cliente.nombre = "";
    this.cliente.correo = "";
  }

  seleccionar(cliente: { id: number; nombre: string; correo: string; }) {
    this.cliente.id = cliente.id;
    this.cliente.nombre = cliente.nombre;
    this.cliente.correo = cliente.correo;
  }

  modificar() {
    for (let x = 0; x < this.clientes.length; x++)
      if (this.clientes[x].id == this.cliente.id) {
        this.clientes[x].nombre = this.cliente.nombre;
        this.clientes[x].correo = this.cliente.correo;
        return;
      }
    alert('No existe el ID de cliente ingresado');
  }
}
