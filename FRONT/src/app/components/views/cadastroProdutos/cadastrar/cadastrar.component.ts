import { CadastrarProdutosService } from './../../../../services/cadastrar-produtos.service';
import { CadastroProdutos } from './../../../../model/CadastroProdutos';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  colunasFornecedor = ["nomeFornecedor", "cnpjFornecedor", "telFornecedor", "emailFornecedor"];

//CadastroProdutos
data! : string;
nomeProduto! : String;
unidadeMed! : String;


//Fornecedor
  nomeFornecedor!: string;
  cnpjFornecedor!: String;
   telFornecedor!: String;
   emailFornecedor!: String;
   fornecedores = new MatTableDataSource<Fornecedor>();


  constructor(private service: CadastrarProdutosService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  cadastrar(): void{
    let cadastroProdutos = new CadastroProdutos();
    cadastroProdutos.data = new Date(this.data);
    
    cadastroProdutos.fornecedores = this.fornecedores.data;
    cadastroProdutos.nomeProduto = this.nomeProduto;
    cadastroProdutos.unidadeMed = this.unidadeMed;
   this.nomeProduto = "";
    this.unidadeMed = "";
    this.service.cadastrar(cadastroProdutos).subscribe((cadastroProdutos) => {
      console.log(cadastroProdutos);
      this.snack.open("Novo produto cadastrado", "CadastroProduto", {
        duration:3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      })
      this.router.navigate([""]);
    });
  }

   
    adicionarFornecedor( ): void {
      /*console.log( this.nomeFornecedor, this.cnpjFornecedor, this.telFornecedor, this.emailFornecedor);*/
     let fornecedor = new Fornecedor();
      fornecedor.nomeFornecedor = this.nomeFornecedor;
      fornecedor.cnpjFornecedor = this.cnpjFornecedor;
      fornecedor.telFornecedor = this.telFornecedor;
      fornecedor.emailFornecedor = this.emailFornecedor;
      this.fornecedores.data.push(fornecedor);
      this.fornecedores._updateChangeSubscription();
      this.nomeFornecedor = "";
      this.cnpjFornecedor = "";
      this.telFornecedor = "";
      this.emailFornecedor = "";
    }


}
