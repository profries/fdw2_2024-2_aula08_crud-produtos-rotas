import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormsModule } from '@angular/forms';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    CardProdutoComponent,
    ListCardProdutosComponent,
    MoedaPipe,
    FiltroPesquisaPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
