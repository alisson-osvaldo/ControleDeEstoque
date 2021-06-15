import { FornecedorService } from './../../../../services/Fornecedor.service';
import { Fornecedor } from './../../../../model/Fornecedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent implements OnInit {

  fornecedores : Fornecedor = new Fornecedor( );

  constructor(private service: FornecedorService) { }

  ngOnInit(): void {
  }

  cadastrar( ): void{
    this.service.cadastrar(this.fornecedores).subscribe((fornecedores) =>{
      console.log(this.fornecedores)
    });
  }

}
