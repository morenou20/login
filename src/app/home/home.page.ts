import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: string = '';
  password: string = '';

  abrir = false;
  btn_alert = ['cerrar'];

  constructor(private router: Router) { }

  alerta(isOpen: boolean) {
    this.abrir = isOpen;
  }

  ngOnInit() {
  }

  login() {


    if (this.usuario == "admin" && this.password == "admin") {

      console.log(this.usuario);
      console.log(this.password);

      let prm: NavigationExtras = {
        state:
        {
          user: this.usuario,
          pass: this.password
        }
      }

      this.router.navigate(['principal'], prm); //ir hacia una carpeta x

    } else {
      this.abrir = true;
    }
  }

}
