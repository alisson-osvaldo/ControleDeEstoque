import { AtualizarProdutoComponent } from './components/views/cadastroProdutos/atualizar-produto/atualizar-produto.component';
import { DeletarFornecedorComponent } from './components/views/fornecedor/deletar-fornecedor/deletar-fornecedor.component';
import { ListarEntradaComponent } from './components/views/entrada/listar-entrada/listar-entrada.component';
import { CadastrarComponent } from './components/views/cadastroProdutos/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/cadastroProdutos/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEntradaComponent } from './components/views/entrada/cadastrar-entrada/cadastrar-entrada.component';
import { CadastrarFornecedorComponent } from './components/views/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedorComponent } from './components/views/fornecedor/listar-fornecedor/listar-fornecedor.component';
<<<<<<< HEAD
import { DeletarCadastroComponent } from './components/views/cadastroProdutos/deletar-cadastro/deletar-cadastro.component';
import { EntradaProdutos } from './model/EntradaProdutos';
import { DeletarEntradaComponent } from './components/views/entrada/deletar-entrada/deletar-entrada.component';
=======
import { ProductUpdateComponent } from './components/views/cadastroProdutos/product-update/product-update.component';
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a


const routes: Routes = [
  //Home----------------------------------------------------------------------------------
  {
    path:'',
    component : ListarComponent
  },
  //CadastroProdutos---------------------------------------------------------------------
  {
    path:'controle/listar/produto',
    component : ListarComponent
  },
  {
    path : 'cadastroProdutos/cadastrar',
    component : CadastrarComponent
  },
  {
<<<<<<< HEAD
    path : 'controle/alterar/produto/:id',
    component : AtualizarProdutoComponent
  },
  {
    path: 'controle/produto/deletar/:nomeProduto',
    component : DeletarCadastroComponent
  },
  //EntradaProdutos----------------------------------------------------------------------
=======
    path : 'cadastroProdutos/atualizar/:_id',
    component : ProductUpdateComponent
  },

  //EntradaProdutos
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a
  {
    path : 'controle/listar/entrada',
    component : ListarEntradaComponent
  },
  {
    path : 'controle/cadastrar/entrada',
    component : CadastrarEntradaComponent
  },
  {
     path : 'controle/deletar/estoque/:nomeProduto',
     component : DeletarEntradaComponent
  },
  
  //Fornecedor--------------------------------------------------------------------------------
{
  path : 'controle/cadastrar/fornecedor',
  component : CadastrarFornecedorComponent
},
{
  path : 'controle/listar/fornecedor',
  component : ListarFornecedorComponent
},
{
  path : 'controle/fornecedor/deletar/:cnpj',
  component : DeletarFornecedorComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }