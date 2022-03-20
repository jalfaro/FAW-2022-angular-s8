import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Input() nombre: string="";
  @Input() telefono: string="";
  @Input() avatar: string="";

  @Output() borrar = new EventEmitter<Contacto>()
  constructor() { }

  ngOnInit(): void {
  }

  eliminar() {
    this.borrar.emit(new Contacto(this.nombre, this.telefono, this.avatar))
  }

}
