import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  nome = new FormControl('');
  ngOnInit(): void { }

  public salvarDados(form: NgForm): void {
    try {
      const data = {
        nome: form.controls['nome'].value
      };

      //Efetua a requisição para o backend
      this.usuarioService.create(data).subscribe(
        response => {
          form.resetForm();
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        })
    } catch (error) {
      console.error('Exceção disparada: ', error);
    }
  }
}
