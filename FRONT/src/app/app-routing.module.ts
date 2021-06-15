import { HomeComponent } from './components/views/home/home.component';
import { ListarEntradaComponent } from './components/views/entrada/listar-entrada/listar-entrada.component';
import { CadastrarComponent } from './components/views/cadastroProdutos/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/cadastroProdutos/listar/listar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEntradaComponent } from './components/views/entrada/cadastrar-entrada/cadastrar-entrada.component';
import { CadastrarFornecedorComponent } from './components/views/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';


const routes: Routes = [
  //CadastroProsutos
  {
    path : 'controle/cadastrar/produto',
    component : HomeComponent
  },
  {
    path:'controle/listar/produto',
    component : ListarComponent
  },
  {
    path : 'cadastroProdutos/cadastrar',
    component : CadastrarComponent
  },
  //EntradaProdutos
  {
    path : 'controle/listar/entrada',
    component : ListarEntradaComponent
  },
  {
    path : 'controle/cadastrar/entrada',
    component : CadastrarEntradaComponent
  },
  //Fornecedor
{
  path : 'controle/cadastrar/fornecedor',
  component : CadastrarFornecedorComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
