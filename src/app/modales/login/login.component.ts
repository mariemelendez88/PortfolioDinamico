import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  get Mail(){
    return this.form.get("email");
  }

  get MailInvalido(){
    return this.Mail?.errors && this.Mail?.touched;
  }

  get MailValido(){
    return !this.Mail?.errors && this.Mail?.touched;
  }

   get Password(){
    return this.form.get("password");
  }

  get PasswordInvalido(){
    return this.Password?.errors && this.Password?.touched;
  }

  get PasswordValido(){
    return !this.Password?.errors && this.Password?.touched
  }
  
  limpiar() {
    console.log("Se limpió el formulario")
    this.form.reset();
  }

  onEnviar(event: Event){
    event?.preventDefault;

    if (this.form.valid){
      alert("Todo salió bien ¡¡Se envió formulario!!")
      console.log("Se envió el formulario")
    }
    else{
      alert("Error, corregir para poder loguearse.")
      this.form.markAllAsTouched();
      console.log("Hay un error en el formulario")
    }
  }
}
