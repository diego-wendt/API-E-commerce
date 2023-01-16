import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from '../service/produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async findAllProducts() {
    return await this.produtoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.produtoService.findById(id);
    } catch (error) {}
  }
}
