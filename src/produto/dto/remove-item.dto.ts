import { IsNumber, IsString } from 'class-validator';

export class RemoveItemDto {
  @IsString()
  id: string;

  @IsNumber()
  item: number;
}
