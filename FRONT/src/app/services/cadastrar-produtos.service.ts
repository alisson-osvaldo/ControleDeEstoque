import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CadastroProdutos } from "../model/CadastroProdutos";
import { Fornecedor } from "../model/Fornecedor";

@Injectable({
  providedIn: "root",
})
export class CadastrarProdutosService {
  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listar(): Observable<CadastroProdutos[]> {
    return this.http.get<CadastroProdutos[]>(
      `${this.baseURL}controle/listar/produto`
    );
  }

  cadastrar(cadastrarProdutos: CadastroProdutos): Observable<CadastroProdutos> {
    return this.http.post<CadastroProdutos>(
      `${this.baseURL}controle/cadastrar/produto`,
      cadastrarProdutos
    );
  }

  listarfornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(
      `${this.baseURL}controle/listar/fornecedor`
    );
  }

 

  buscarPorId(_id: string): Observable<CadastroProdutos> {
    return this.http.get<CadastroProdutos>(`${this.baseURL}/${_id}`, );
  }

  atualizar(cadastroProdutos: CadastroProdutos): Observable<CadastroProdutos> {
    return this.http.put<CadastroProdutos>(`${this.baseURL}/${cadastroProdutos._id}`, cadastroProdutos);
  }

<<<<<<< HEAD

  deletar(nomeProduto: string): Observable<CadastroProdutos> {
    return this.http.delete<CadastroProdutos>(`${this.baseURL}controle/produto/deletar/${nomeProduto}` );
=======
  cadastrar(cadastrarProdutos: CadastroProdutos): Observable<CadastroProdutos>{
    return this.http.post<CadastroProdutos>(`${this.baseURL}controle/cadastrar/produto`,cadastrarProdutos )
    
  }

  readById(_id : string): Observable<CadastroProdutos>{
    const url = `${this.baseURL}/${_id}`
    return this.http.get<CadastroProdutos>(url)
  }

  update(cadastrarProdutos : CadastroProdutos) : Observable<CadastroProdutos>{
    const url = `${this.baseURL}/${cadastrarProdutos._id}`

    return this.http.put<CadastroProdutos>(url, cadastrarProdutos)
    
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a
  }


}
