import { EntradaService } from 'src/app/services/Entrada.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar-entrada',
  templateUrl: './deletar-entrada.component.html',
  styleUrls: ['./deletar-entrada.component.css']
})
export class DeletarEntradaComponent implements OnInit {
  nomeProduto! : string;
  quantidade!: number;
  valor!: number;
  lote!: number;
  
  constructor( private service: EntradaService, private router: Router, private snack: MatSnackBar) { }

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