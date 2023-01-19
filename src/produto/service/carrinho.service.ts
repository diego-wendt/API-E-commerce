import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCarrinhoDto } from '../dto/create-carrinho.dto';
import { CarrinhoEntity } from '../entities/carrinho.entity';
import { ProdutoService } from './produto.service';

@Injectable()
export class CarrinhoService {
  constructor(
    private produtoService: ProdutoService,
    @Inject('CARRINHO_REPOSITORY')
    private carrinhoRepository: Repository<CarrinhoEntity>,
  ) {}

  async getData(id) {
    return await this.carrinhoRepository.find({
      where: { id: id.id },
      relations: { cesta: true },
    });
  }

  async criarCarrinho(novoCarrinho: CreateCarrinhoDto) {
    const carrinho = this.carrinhoRepository.create();
    carrinho.usuario = novoCarrinho.nome;
    carrinho.cesta = [];
    for await (const iterator of novoCarrinho.cesta) {
      const produto = await this.produtoService.findProduct(iterator);
      carrinho.cesta.push(produto);
    }

    return await this.carrinhoRepository.save(carrinho);
  }
}
