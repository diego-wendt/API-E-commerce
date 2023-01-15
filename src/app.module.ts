/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './core/auth/guards/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
require('dotenv-flow').config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PassportModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
