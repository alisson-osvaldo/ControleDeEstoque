import { FornecedorService } from './../../../../services/Fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-deletar-fornecedor',
  templateUrl: './deletar-fornecedor.component.html',
  styleUrls: ['./deletar-fornecedor.component.css']
})
export class DeletarFornecedorComponent implements OnInit {

  nomeFornecedor! : string;
  cnpj!: number;
  telFornecedor!: string;
  emailFornecedor!: string;

  constructor(private service: FornecedorService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  deletar(cnpj: number): void{
    console.log(this.deletar);
    this.service.deletar(cnpj).subscribe((cnpj) => {
      console.log(cnpj);
      this.snack.open("Fornecedor deletado ", "Fornecedor",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
      this.ngOnInit
    });
  }

}
