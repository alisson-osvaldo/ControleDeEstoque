import { FornecedorService } from "./../../../../services/Fornecedor.service";
import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "src/app/model/Fornecedor";

@Component({
  selector: "app-listar-fornecedor",
  templateUrl: "./listar-fornecedor.component.html",
  styleUrls: ["./listar-fornecedor.component.css"],
})
export class ListarFornecedorComponent implements OnInit {
  fornecedores: Fornecedor[] = [];

  constructor(private service: FornecedorService) {}

  ngOnInit(): void {
    this.service.listarfornecedor().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
      console.log(this.fornecedores);
    });
  }
}
