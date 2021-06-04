import { CadastrarProdutosService } from './../../../../services/cadastrar-produtos.service';
import { CadastroProdutos } from './../../../../model/CadastroProdutos';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastroProduto : CadastroProdutos = new CadastroProdutos( );

  constructor(private service: CadastrarProdutosService) { }

  ngOnInit(): void {
  }

  cadastrar( ): void{
    this.service.cadastrar(this.cadastroProduto).subscribe((cadastroProduto) => {
      console.log(cadastroProduto)
    });
  
  }

}
