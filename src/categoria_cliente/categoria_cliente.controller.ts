import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaClienteService } from './categoria_cliente.service';
import { CreateCategoriaClienteDto } from './dto/create-categoria_cliente.dto';
import { UpdateCategoriaClienteDto } from './dto/update-categoria_cliente.dto';

@Controller('categoria-cliente')
export class CategoriaClienteController {
  constructor(private readonly categoriaClienteService: CategoriaClienteService) {}

  @Post()
  create(@Body() createCategoriaClienteDto: CreateCategoriaClienteDto) {
    return this.categoriaClienteService.create(createCategoriaClienteDto);
  }

  @Get()
  findAll() {
    return this.categoriaClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaClienteDto: UpdateCategoriaClienteDto) {
    return this.categoriaClienteService.update(+id, updateCategoriaClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaClienteService.remove(+id);
  }
}
