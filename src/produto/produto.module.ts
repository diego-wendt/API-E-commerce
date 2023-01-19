import { Module } from '@nestjs/common';
import { DatabaseProviders } from 'src/core/database/database.providers';
import { CarrinhoController } from './controller/carrinho.controller';
import { ProdutoController } from './controller/produto.controller';
import { CarrinhoService } from './service/carrinho.service';
import { ProdutoService } from './service/produto.service';
import { EcommerceProviders } from './user.providers';

@Module({
  controllers: [ProdutoController, CarrinhoController],
  providers: [
    ProdutoService,
    CarrinhoService,
    ...DatabaseProviders,
    ...EcommerceProviders,
  ],
})
export class ProdutoModule {}
