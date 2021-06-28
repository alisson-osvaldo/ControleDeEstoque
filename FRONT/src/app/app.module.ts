import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { ListarComponent } from './components/views/cadastroProdutos/listar/listar.component';
import { CadastrarComponent } from './components/views/cadastroProdutos/cadastrar/cadastrar.component';
import { ListarEntradaComponent } from './components/views/entrada/listar-entrada/listar-entrada.component';
import { CadastrarEntradaComponent } from './components/views/entrada/cadastrar-entrada/cadastrar-entrada.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { FormsModule } from '@angular/forms';
import { BuscarComponent } from './components/views/cadastroProdutos/buscar/buscar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarFornecedorComponent } from './components/views/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedorComponent } from './components/views/fornecedor/listar-fornecedor/listar-fornecedor.component';
<<<<<<< HEAD
import { AtualizarProdutoComponent } from './components/views/cadastroProdutos/atualizar-produto/atualizar-produto.component';
import { DeletarFornecedorComponent } from './components/views/fornecedor/deletar-fornecedor/deletar-fornecedor.component';
import { DeletarCadastroComponent } from './components/views/cadastroProdutos/deletar-cadastro/deletar-cadastro.component';
import { DeletarEntradaComponent } from './components/views/entrada/deletar-entrada/deletar-entrada.component';
import { FooterComponent } from './components/template/footer/footer.component';
=======
import { FooterComponent } from './components/template/footer/footer.component';
import { ProductUpdateComponent } from './components/views/cadastroProdutos/product-update/product-update.component';
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    HeaderComponent,
    ContentComponent,
    ListarEntradaComponent,
    CadastrarEntradaComponent,
    BuscarComponent,
    CadastrarFornecedorComponent,
    ListarFornecedorComponent,
<<<<<<< HEAD
    AtualizarProdutoComponent,
    DeletarFornecedorComponent,
    DeletarCadastroComponent,
    DeletarEntradaComponent,
    FooterComponent
=======
    FooterComponent,
    ProductUpdateComponent,
>>>>>>> b4e2887f5a86728f8a57c6c0c7141114afb7fc0a
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
