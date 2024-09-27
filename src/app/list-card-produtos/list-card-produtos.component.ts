import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-list-card-produtos',
  templateUrl: './list-card-produtos.component.html',
  styleUrl: './list-card-produtos.component.css'
})
export class ListCardProdutosComponent {
  listaProdutos: Produto[] = [];  

  constructor(private produtoService: ProdutoService) {
    this.listaProdutos = produtoService.listar();
  }


}
