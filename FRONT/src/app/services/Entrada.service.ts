import { EntradaProdutos } from "./../model/EntradaProdutos";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EntradaService {
  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listarEntrada(): Observable<EntradaProdutos[]> {
    return this.http.get<EntradaProdutos[]>(
      `${this.baseURL}controle/listar/entrada`
    );
  }

  cadastrar(entradaProdutos: EntradaProdutos): Observable<EntradaProdutos> {
    return this.http.post<EntradaProdutos>(
      `${this.baseURL}controle/cadastrar/entrada`,
      entradaProdutos
    );
  }

  deletar(nomeProduto: string): Observable<EntradaProdutos> {
    return this.http.delete<EntradaProdutos>(`${this.baseURL}controle/deletar/estoque/${nomeProduto}` );
  }
  
}
