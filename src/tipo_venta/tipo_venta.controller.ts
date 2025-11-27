/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TipoVentaService } from './tipo_venta.service';
import { CreateTipoVentaDto } from './dto/create-tipo_venta.dto';
import { UpdateTipoVentaDto } from './dto/update-tipo_venta.dto';

@Controller('tipo-venta')
export class TipoVentaController {
  constructor(private readonly tipoVentaService: TipoVentaService) {}

  @Post()
  create(@Body() createTipoVentaDto: CreateTipoVentaDto) {
    return this.tipoVentaService.create(createTipoVentaDto);
  }

  @Get()
  findAll() {
    return this.tipoVentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoVentaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoVentaDto: UpdateTipoVentaDto) {
    return this.tipoVentaService.update(+id, updateTipoVentaDto);
  }
}
