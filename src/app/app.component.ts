import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  //Itens do menu
  public itens: object = [
    {
      nome: 'Página Inicial',
      rota: '/home',
    },
    {
      nome: 'Cadastrar',
      rota: '/cadastro',
    },
  ];

  constructor(private router: Router) { }

  verificarRota(rota): string {
    return this.router.url === rota ? 'nav-link active' : 'nav-link';
  }
}
