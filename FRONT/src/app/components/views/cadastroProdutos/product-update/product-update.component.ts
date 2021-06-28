import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroProdutos } from 'src/app/model/CadastroProdutos';
import { CadastrarProdutosService } from 'src/app/services/cadastrar-produtos.service';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  //Atualizar Produto

  _id! : string 
  data! : string;
  nomeProduto! : String;
  unidadeMed! : String;

  constructor(private service: CadastrarProdutosService, private router: Router, private snack: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  productUpdate(): void {
  }
  cancel(): void{
    this.router.navigate(['/controle/listar/produto'])
  }
}
