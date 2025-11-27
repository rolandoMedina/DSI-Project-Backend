import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCatsProductoService } from './sub_cats_producto.service';
import { CreateSubCatsProductoDto } from './dto/create-sub_cats_producto.dto';
import { UpdateSubCatsProductoDto } from './dto/update-sub_cats_producto.dto';

@Controller('api/subcatproducto')
export class SubCatsProductoController {
  constructor(private readonly subCatsProductoService: SubCatsProductoService) {}

  @Post()
  create(@Body() createSubCatsProductoDto: CreateSubCatsProductoDto) {
    return this.subCatsProductoService.create(createSubCatsProductoDto);
  }

  @Get()
  findAll() {
    return this.subCatsProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCatsProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubCatsProductoDto: UpdateSubCatsProductoDto) {
    return this.subCatsProductoService.update(+id, updateSubCatsProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCatsProductoService.remove(+id);
  }
}
