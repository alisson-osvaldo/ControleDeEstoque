import { FornecedorService } from "./../../../../services/Fornecedor.service";
import { Fornecedor } from "./../../../../model/Fornecedor";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { from } from "rxjs";

@Component({
  selector: "app-cadastrar-fornecedor",
  templateUrl: "./cadastrar-fornecedor.component.html",
  styleUrls: ["./cadastrar-fornecedor.component.css"],
})
export class CadastrarFornecedorComponent implements OnInit {
  nomeFornecedor!: string;
  cnpj!: string;
  telFornecedor!: string;
  emailFornecedor!: string;

  constructor(
    private service: FornecedorService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let cadastroFornecedor = new Fornecedor();
    cadastroFornecedor.nomeFornecedor = this.nomeFornecedor;
    cadastroFornecedor.cnpj = Number.parseInt(this.cnpj);
    cadastroFornecedor.telFornecedor = this.telFornecedor;
    cadastroFornecedor.emailFornecedor = this.emailFornecedor;
    this.nomeFornecedor = "";
    this.cnpj = "";
    this.telFornecedor = "";
    this.emailFornecedor = "";
    this.service
      .cadastrar(cadastroFornecedor)
      .subscribe((cadastroFornecedor) => {
        console.log(cadastroFornecedor);
        this.snack.open("Novo Fornecedor cadastrado", "Fornecedor", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate([""]);
      });
  }
}
