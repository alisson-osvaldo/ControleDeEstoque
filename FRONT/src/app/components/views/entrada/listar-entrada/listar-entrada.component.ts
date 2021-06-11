import { EntradaProdutos } from './../../../../model/EntradaProdutos';
import { EntradaService } from './../../../../services/Entrada.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-entrada',
  templateUrl: './listar-entrada.component.html',
  styleUrls: ['./listar-entrada.component.css']
})
export class ListarEntradaComponent implements OnInit {

  entradas :EntradaProdutos[] = [];

  constructor(private service : EntradaService) { }

  ngOnInit(): void {
    this.service.listarEntrada( ).subscribe((entradascadastradas) =>{
      this.entradas = entradascadastradas;
      console.log(this.entradas);
    });
  }

}
