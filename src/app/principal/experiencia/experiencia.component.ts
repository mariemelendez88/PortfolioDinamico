import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  experiencias: any=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private InfoService: InfoService,
    ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variebla de instancia los datos recuperados por el Servicio
    this.InfoService.getDatos().subscribe(data => {
      console.log(data);
      //Definir info a mostrar
      this.experiencias = data.experiencias;
    })
  }

}
