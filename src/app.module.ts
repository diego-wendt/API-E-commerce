/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProdutoModule } from './user/produto.module';
require('dotenv-flow').config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ProdutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
