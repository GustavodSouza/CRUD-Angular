import { NgForm } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listaUsuarios = [];
  modalRef: BsModalRef;

  //Armazena os dados para mostrar no modal
  public dadosEdit = {
    id: '',
    nome: '',
  };

  constructor(
    private usuarioService: UsuarioService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.buscarUsuario(); //Sempre que montar o component, busca os dados
  }

  public buscarUsuario(): void {
    this.usuarioService.findAll().subscribe(response => {
      response.forEach((item) => {
        this.listaUsuarios.push(item); //Adiciona os dados no array
      });
    });
  }

  public deletarUsuario(id): void {
    this.usuarioService.deletarUsuario(id).subscribe(
      response => {
        window.location.reload(); //Recarrega a página
      },
      error => {
        console.log('Entrou aqui', error);
      });
  }

  public openModal(template: TemplateRef<any>, dados): void {
    this.dadosEdit.id = dados.id;
    this.dadosEdit.nome = dados.nome;
    this.modalRef = this.modalService.show(template);
  }

  public atualizarDados(form: NgForm): void {
    //Monta o objeto
    const data = {
      id: form.controls['id'].value,
      nome: form.controls['nome'].value
    };
    this.usuarioService.atualizarUsuario(data).subscribe(response => {
      window.location.reload(); //Renderizo a página
    });
    this.modalRef.hide(); //Fecha o modal
  }
}
