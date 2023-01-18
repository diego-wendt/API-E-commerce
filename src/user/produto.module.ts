import { Module } from '@nestjs/common';
import { DatabaseProviders } from 'src/core/database/database.providers';
import { ProdutoController } from './controller/produto.controller';
import { ProdutoService } from './service/produto.service';
import { ProdutosProviders } from './user.providers';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, ...DatabaseProviders, ...ProdutosProviders],
})
export class ProdutoModule {}
