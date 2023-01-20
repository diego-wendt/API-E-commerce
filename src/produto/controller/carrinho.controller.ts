import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { CreateCarrinhoDto } from '../dto/create-carrinho.dto';
import { RemoveItemDto } from '../dto/remove-item.dto';
import { CarrinhoService } from '../service/carrinho.service';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private carrinhoService: CarrinhoService) {}

  @Get(':id')
  async getData(@Param() id: string) {
    return await this.carrinhoService.getData(id);
  }

  @Post()
  async criarCarrinho(@Body() novoCarrinho: CreateCarrinhoDto) {
    return await this.carrinhoService.criarCarrinho(novoCarrinho);
  }

  @Put()
  async removeItem(@Body() updateCarrinho: RemoveItemDto) {
    return await this.carrinhoService.removeItem(updateCarrinho);
  }
}
