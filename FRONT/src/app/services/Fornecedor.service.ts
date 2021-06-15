import { Fornecedor } from '../model/Fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class FornecedorService {
    
    baseURL = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    listarfornecedor( ): Observable<Fornecedor[ ]>{
        return this.http.get<Fornecedor[ ]>(`${this.baseURL}controle/listar/fornecedor`)
    }

    cadastrar(fornecedores: Fornecedor): Observable<Fornecedor>{
        return this.http.post<Fornecedor>(`${this.baseURL}controle/cadastrar/fornecedor`,fornecedores);
        
    }
    
}