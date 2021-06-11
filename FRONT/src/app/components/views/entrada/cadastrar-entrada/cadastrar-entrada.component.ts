import { EntradaService } from './../../../../services/Entrada.service';
import { EntradaProdutos } from './../../../../model/EntradaProdutos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-entrada',
  templateUrl: './cadastrar-entrada.component.html',
  styleUrls: ['./cadastrar-entrada.component.css']
})
export class CadastrarEntradaComponent implements OnInit {

  entradaProduto : EntradaProdutos = new EntradaProdutos( );

  constructor(private service : EntradaService) { }

  ngOnInit(): void {
  }

    cadastrar( ): void{
      this.service.cadastrar(this.entradaProduto).subscribe((entradaProduto) => {
        console.log(entradaProduto)
      });
    }
  

}
