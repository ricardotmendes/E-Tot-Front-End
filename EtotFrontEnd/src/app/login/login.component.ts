import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
    
    
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
     this.userLogin = resp 
     localStorage.setItem('token', this.userLogin.token)
     localStorage.setItem('usuario', this.userLogin.usuario)
      if(this.userLogin.usuario == 'instrutor'){
        this.router.navigate(['/area-login'])
      } else{
        this.router.navigate(['/aluno-cursos'])
      }

     
     //alterar router.navigate/home  depois para page dentro dos cursos, por exemplo
    })
  }
}
