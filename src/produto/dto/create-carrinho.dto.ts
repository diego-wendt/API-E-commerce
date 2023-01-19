import { IsString } from 'class-validator';

export class CreateCarrinhoDto {
  @IsString()
  nome: string;

  cesta: number[];
}
