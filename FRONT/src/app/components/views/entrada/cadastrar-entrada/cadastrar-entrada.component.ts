import { EntradaService } from "./../../../../services/Entrada.service";
import { EntradaProdutos } from "./../../../../model/EntradaProdutos";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar-entrada",
  templateUrl: "./cadastrar-entrada.component.html",
  styleUrls: ["./cadastrar-entrada.component.css"],
})
export class CadastrarEntradaComponent implements OnInit {
  nomeProduto!: string;
  quantidade!: string;
  valor!: string;
  lote!: string;

  constructor(
    private service: EntradaService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let entradaProdutos = new EntradaProdutos();
    entradaProdutos.nomeProduto = this.nomeProduto;
    entradaProdutos.quantidade = Number.parseInt(this.quantidade);
    entradaProdutos.valor = Number.parseInt(this.valor);
    entradaProdutos.lote = Number.parseInt(this.lote);
    this.nomeProduto = "";
    this.quantidade = "";
    this.valor = "";
    this.lote = "";
    this.service.cadastrar(entradaProdutos).subscribe((entradaProdutos) => {
      console.log(entradaProdutos);
      this.snack.open("Nova entrada de produto", "Entrada Produto", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
