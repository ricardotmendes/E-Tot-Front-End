import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-area-login',
  templateUrl: './area-login.component.html',
  styleUrls: ['./area-login.component.css']
})
export class AreaLoginComponent implements OnInit {

  produto: Produto = new Produto ()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategorias()
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }


}
