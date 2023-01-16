import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProdutoEntity } from '../entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async findAll() {
    return await this.produtoRepository.find();
  }

}
