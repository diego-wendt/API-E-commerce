import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Inject } from '@nestjs/common/decorators';
import { ProdutoEntity } from '../entities/produto.entity';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { EnumCategoria } from '../enum/enum.categoria';

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

  async findByCategory(categoria) {
    const parseCategoria = parseInt(EnumCategoria[categoria]);
    return await this.produtoRepository.find({
      where: { categoria: parseCategoria },
    });
  }

  async createProduct(createProduct: CreateProdutoDto) {
    try {
      const product = this.produtoRepository.create();
      product.nome = createProduct.nome;
      product.valor = createProduct.valor;
      product.descricao = createProduct.descricao;
      product.categoria = parseInt(EnumCategoria[createProduct.categoria]);
      const savedProduct = await this.produtoRepository.save(product);
      return savedProduct;
    } catch (error) {}
  }

  async findProduct(productId) {
    return await this.produtoRepository.findOneBy({ id: productId });
  }
}
