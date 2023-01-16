import { Module } from '@nestjs/common';
import { ProdutoService } from './service/produto.service';
import { ProdutoController } from './controller/produto.controller';
import { DatabaseProviders } from 'src/core/database/database.providers';
import { ProdutoProviders } from './produto.providers';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, ...DatabaseProviders, ...ProdutoProviders],
})
export class ProdutoModule {}
