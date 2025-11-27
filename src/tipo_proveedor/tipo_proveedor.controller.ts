/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TipoProveedorService } from './tipo_proveedor.service';
import { CreateTipoProveedorDto } from './dto/create-tipo_proveedor.dto';
import { UpdateTipoProveedorDto } from './dto/update-tipo_proveedor.dto';

@Controller('tipo-proveedor')
export class TipoProveedorController {
  constructor(private readonly tipoProveedorService: TipoProveedorService) {}

  @Post()
  create(@Body() createTipoProveedorDto: CreateTipoProveedorDto) {
    return this.tipoProveedorService.create(createTipoProveedorDto);
  }

  @Get()
  findAll() {
    return this.tipoProveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoProveedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoProveedorDto: UpdateTipoProveedorDto) {
    return this.tipoProveedorService.update(+id, updateTipoProveedorDto);
  }
}