import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  footer: any=[];
  nombre: string='';
  apellido: string='';

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private InfoService: InfoService,
    ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variebla de instancia los datos recuperados por el Servicio
    this.InfoService.getDatos().subscribe(data => {
      console.log(data);
      //Definir info a mostrar
      this.footer = data.footer;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    })
  }

}
