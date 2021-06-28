import { Fornecedor } from "../model/Fornecedor";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FornecedorService {
  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listarfornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(
      `${this.baseURL}controle/listar/fornecedor`
    );
  }

  cadastrar(fornecedores: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(
      `${this.baseURL}controle/cadastrar/fornecedor`,
      fornecedores
    );
  }

  deletar(cnpj: number): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(`${this.baseURL}controle/fornecedor/deletar/${cnpj}` );
  }

/*
  deletar(fornecedores : Fornecedor){
    return this.http.delete<Fornecedor>(this.baseURL + ' / ' + fornecedores._id);
  }

  delete(fornecedores : Fornecedor): Observable<Fornecedor> {
   return this.http.delete<Fornecedor>(`${this.baseURL + fornecedores}'controle/fornecedor/deletar/:id`);
 }
 */
}
