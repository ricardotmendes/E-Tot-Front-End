import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  produto: Produto = new Produto ()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  IdCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategorias()

    }
  

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp;
    })
  }


  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp;
    })
  }

  findByIdCategoria (){
    this.categoriaService.getByIdCategoria(this.IdCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }


}