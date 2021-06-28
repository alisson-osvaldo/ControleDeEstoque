import { CadastrarProdutosService } from "./../../../../services/cadastrar-produtos.service";
import { CadastroProdutos } from "./../../../../model/CadastroProdutos";
import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "src/app/model/Fornecedor";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  //CadastroProdutos
  nomeProduto!: String;
  unidadeMed!: String;
  fornecedor?: Number;

  //Fornecedor
  fornecedores: Fornecedor[] = [];

  constructor(
    private service: CadastrarProdutosService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.service.listarfornecedor().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
      console.log(this.fornecedores);
    });
  }

<<<<<<< HEAD
  cadastrar(): void {
    console.log(this.fornecedor);
=======
  cadastrar(): void{
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a
    let cadastroProdutos = new CadastroProdutos();
    cadastroProdutos.fornecedor = this.fornecedor;
    // cadastroProdutos.fornecedores = this.fornecedores.data;
    cadastroProdutos.nomeProduto = this.nomeProduto;
    cadastroProdutos.unidadeMed = this.unidadeMed;
    this.nomeProduto = "";
    this.unidadeMed = "";
    this.service.cadastrar(cadastroProdutos).subscribe((cadastroProdutos) => {
      console.log(cadastroProdutos);
<<<<<<< HEAD
      this.snack.open("Novo produto cadastrado", "CadastroProduto", {
        duration: 3000,
=======
      this.snack.open("Novo produto cadastrado", "X", {
        duration:3000,
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
<<<<<<< HEAD
=======

   
    adicionarFornecedor(): void {
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


>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a
}
