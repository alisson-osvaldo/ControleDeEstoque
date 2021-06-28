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

  cadastrar(): void {
    console.log(this.fornecedor);
    let cadastroProdutos = new CadastroProdutos();
    cadastroProdutos.fornecedor = this.fornecedor;
    // cadastroProdutos.fornecedores = this.fornecedores.data;
    cadastroProdutos.nomeProduto = this.nomeProduto;
    cadastroProdutos.unidadeMed = this.unidadeMed;
    this.nomeProduto = "";
    this.unidadeMed = "";
    this.service.cadastrar(cadastroProdutos).subscribe((cadastroProdutos) => {
      console.log(cadastroProdutos);
      this.snack.open("Novo produto cadastrado", "CadastroProduto", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
