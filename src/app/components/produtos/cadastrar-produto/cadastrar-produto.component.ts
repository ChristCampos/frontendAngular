import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit{

  produto: IProduto ={
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {}

  salvarProduto(): void {
   this.produtosService.cadastrar(this.produto).subscribe(retorno => {
    this.produto = retorno;
    this.produtosService.exibirMensagem(
      'Sistema',
      `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
      'toast-sucess'
    );
    this.router.navigate(['/produtos']);
   });
  }

}
