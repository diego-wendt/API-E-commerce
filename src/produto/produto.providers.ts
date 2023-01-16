import { DataSource } from 'typeorm';
import { ProdutoEntity } from './entities/produto.entity';

export const ProdutoProviders = [
  {
    provide: 'PRODUTO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProdutoEntity),
    inject: ['DATA_SOURCE'],
  },
];
