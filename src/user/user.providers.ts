import { DataSource } from 'typeorm';
import { ProdutoEntity } from './entities/produto.entity';

export const ProdutosProviders = [
  {
    provide: 'PRODUTO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProdutoEntity),
    inject: ['DATA_SOURCE'],
  },
];
