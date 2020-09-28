import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  public nome: string;
  submitted = false;
  ngOnInit(): void { }


  public salvarDados(): void {
    try {

      const data = {
        nome: 'TEste de api'
      };

      this.usuarioService.create(data);

    } catch (error) {
      console.error(error);
    }
  }
}
