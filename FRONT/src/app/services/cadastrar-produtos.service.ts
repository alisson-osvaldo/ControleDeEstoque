import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroProdutos } from '../model/CadastroProdutos';

@Injectable({
  providedIn: 'root'
})
export class CadastrarProdutosService {

  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar( ): Observable<CadastroProdutos[ ]>{
    return this.http.get<CadastroProdutos[ ]>(`${this.baseURL}controle/listar/produto
    `)
  }

  cadastrar(cadastrarProdutos: CadastroProdutos): Observable<CadastroProdutos>{
    return this.http.post<CadastroProdutos>(`${this.baseURL}controle/cadastrar/produto`,cadastrarProdutos );
    
  }

}
