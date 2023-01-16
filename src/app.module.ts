/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './core/auth/guards/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ProdutoModule } from './produto/produto.module';
require('dotenv-flow').config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PassportModule,
    ProdutoModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
