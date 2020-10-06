import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/servicos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  create(data): Observable<any> {
    return this.http.post(baseUrl + '/adicionar', data); //URL + Dados do front;
  }

  findAll(): Observable<any> {
    return this.http.get(baseUrl + '/listar');
  }

  deletarUsuario(id): Observable<any> {
    return this.http.delete(baseUrl + '/deletar/' + id, { responseType: 'text' });
  }

  atualizarUsuario(data): Observable<any> {
    return this.http.put(baseUrl + '/atualizar', data, { responseType: 'text' });
  }
}
