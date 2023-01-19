import { Controller, Get, Param, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateCarrinhoDto } from '../dto/create-carrinho.dto';
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
}
