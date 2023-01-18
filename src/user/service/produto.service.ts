import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Inject } from '@nestjs/common/decorators';
import { ProdutoEntity } from '../entities/produto.entity';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async findAll() {
    return await this.produtoRepository.find();
  }

  async findById(id) {
    return await this.produtoRepository.find({
      where: { id: id },
    });
  }

  // async findByCategory(categoria) {
  //   return await this.produtoRepository.find({
  //     where: { categoria: categoria },
  //   });
  // }

  async createProduct(createProduct: CreateProdutoDto) {
    try {
      console.log(createProduct);
      const product = this.produtoRepository.create();
      product.nome = createProduct.nome;
      product.valor = createProduct.valor;
      product.descricao = createProduct.descricao;
      const savedProduct = await this.produtoRepository.save(product);
      console.log(savedProduct);
      return savedProduct;
    } catch (error) {}
  }
}
