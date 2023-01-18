import { DataSource } from 'typeorm';
import { CarrinhoEntity } from './entities/carrinho.entity';
import { ProdutoEntity } from './entities/produto.entity';

export const EcommerceProviders = [
  {
    provide: 'PRODUTO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProdutoEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CARRINHO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CarrinhoEntity),
    inject: ['DATA_SOURCE'],
  },
];
