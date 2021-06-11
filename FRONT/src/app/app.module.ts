import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/views/cadastroProdutos/listar/listar.component';
import { CadastrarComponent } from './components/views/cadastroProdutos/cadastrar/cadastrar.component';
import { ListarEntradaComponent } from './components/views/entrada/listar-entrada/listar-entrada.component';
import { CadastrarEntradaComponent } from './components/views/entrada/cadastrar-entrada/cadastrar-entrada.component';

import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/views/home/home.component';
import { BuscarComponent } from './components/views/cadastroProdutos/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    HeaderComponent,
    ContentComponent,
    ListarEntradaComponent,
    CadastrarEntradaComponent,
    HomeComponent,
    BuscarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
