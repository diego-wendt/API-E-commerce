import { IsString, IsNumberString, IsNumber, IsEnum } from 'class-validator';
import { EnumCategoria } from '../enum/enum.categoria';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  valor: number;

  @IsString()
  descricao: string;

  @IsEnum(EnumCategoria)
  categoria:EnumCategoria
}
