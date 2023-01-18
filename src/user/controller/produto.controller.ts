import { Controller, Post } from '@nestjs/common';
import { Body, Get, Param } from '@nestjs/common/decorators';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { ProdutoService } from '../service/produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

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

  // @Get('/category/:categoria')
  // async findByCategory(@Param() categoria: string) {
  //   try {
  //     return await this.produtoService.findByCategory(categoria);
  //   } catch (error) {}
  // }

  @Post()
  async createProduct(@Body() createProduct: CreateProdutoDto) {
    try {
      return await this.produtoService.createProduct(createProduct);
    } catch (error) {}
  }
}
