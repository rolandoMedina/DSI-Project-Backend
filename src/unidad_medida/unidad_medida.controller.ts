/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UnidadMedidaService } from './unidad_medida.service';
import { CreateUnidadMedidaDto } from './dto/create-unidad_medida.dto';
import { UpdateUnidadMedidaDto } from './dto/update-unidad_medida.dto';

@Controller('unidad-medida') 
export class UnidadMedidaController {
  constructor(private readonly unidadMedidaService: UnidadMedidaService) {}

  @Post()
  create(@Body() createUnidadMedidaDto: CreateUnidadMedidaDto) {
    return this.unidadMedidaService.create(createUnidadMedidaDto);
  }

  @Get()
  findAll() {
    return this.unidadMedidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadMedidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadMedidaDto: UpdateUnidadMedidaDto) {
    return this.unidadMedidaService.update(+id, updateUnidadMedidaDto);
  }
}