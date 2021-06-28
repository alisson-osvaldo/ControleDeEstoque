import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CadastrarProdutosService } from 'src/app/services/cadastrar-produtos.service';

@Component({
  selector: 'app-deletar-cadastro',
  templateUrl: './deletar-cadastro.component.html',
  styleUrls: ['./deletar-cadastro.component.css']
})
export class DeletarCadastroComponent implements OnInit {
  fornecedor?: number;
  nomeProduto! : string;
  unidadeMed! : string;

  constructor( private service: CadastrarProdutosService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  deletar(nomeProduto: string): void{
    console.log(this.deletar);
    this.service.deletar(nomeProduto).subscribe((nomeProduto) => {
      console.log(nomeProduto);
      this.snack.open("Cadastro de produto deletado ", "Cadastro de Produtos",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
      this.ngOnInit
    });
  }

}
