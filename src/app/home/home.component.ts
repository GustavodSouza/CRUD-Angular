import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listaUsuarios = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarUsuario();
  }

  public buscarUsuario(): void {
    this.usuarioService.findAll().subscribe(response => {
      response.forEach((item) => {
        this.listaUsuarios.push(item);
      });
    });
  }

  public deletarUsuario(id): void {
    this.usuarioService.deletarUsuario(id).subscribe(
      response => {
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log('Entrou aqui', error);
      });
  }
}
