import { CadastrarProdutosService } from './../../../../services/cadastrar-produtos.service';
import { CadastroProdutos } from './../../../../model/CadastroProdutos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cadastros : CadastroProdutos[] = [];

  constructor(private service: CadastrarProdutosService) { }

  ngOnInit(): void {
    this.service.listar( ).subscribe((produtosCadastrados) => {
    this.cadastros = produtosCadastrados;
    console.log(this.cadastros);
    });
  }

}
