import { CadastrarProdutosService } from "./../../../../services/cadastrar-produtos.service";
import { CadastroProdutos } from "./../../../../model/CadastroProdutos";
import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "src/app/model/Fornecedor";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
  nomeProduto!: String;
  unidadeMed!: String;
  fornecedor?: Number;

  //Fornecedor
  fornecedores: Fornecedor[] = [];
  CadastrarProdutosService: any;
  CadastroProdutos: any;
  cadastroProdutos: any;

  constructor(
    private service: CadastrarProdutosService,
    private router: Router,
    private snack: MatSnackBar,
    private activatedRouter : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.listarfornecedor().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
      console.log(this.fornecedores);
    });

    const id =  String(this.activatedRouter.snapshot.paramMap.get('_id'));
    this.CadastrarProdutosService.buscarPorId(id).subscribe((retorno: any) => {
      this.cadastroProdutos = retorno;
      console.log(retorno);
    });
  }

   cadastrar(): void {
    console.log(this.fornecedor);
    let cadastroProdutos = new CadastroProdutos();
    cadastroProdutos.fornecedor = this.fornecedor;
    // cadastroProdutos.fornecedores = this.fornecedores.data;
    cadastroProdutos.nomeProduto = this.nomeProduto;
    cadastroProdutos.unidadeMed = this.unidadeMed;
    this.service.atualizar(cadastroProdutos).subscribe((cadastroProdutos) => {
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
