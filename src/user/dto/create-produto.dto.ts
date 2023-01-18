import { IsString, IsNumberString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  valor: number;

  @IsString()
  descricao: string;
}
