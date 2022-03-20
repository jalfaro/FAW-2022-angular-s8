import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  nombre: string = "";
  telefono: string = "";
  avatar: string ="https://www.disneypictures.net/data/media/14/Mickey_Mouse7.gif";
  arreglo: Array<Contacto> = [];

  constructor() { }

  ngOnInit(): void {
  }

  grabar() {
    this.arreglo.push(new Contacto(this.nombre, this.telefono, this.avatar))
    this.nombre = "";
    this.telefono = "0";
    this.avatar = "https://www.disneypictures.net/data/media/14/Mickey_Mouse7.gif";
  }

  borrar(evento: any) {
    this.arreglo.splice(
      this.arreglo.findIndex(
        x => x.nombre == evento.nombre && x.telefono == evento.telefono && x.avatar == evento.avatar),1)
  }

}
