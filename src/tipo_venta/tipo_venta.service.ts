/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateTipoVentaDto } from './dto/create-tipo_venta.dto';
import { UpdateTipoVentaDto } from './dto/update-tipo_venta.dto';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class TipoVentaService {
  constructor(private prisma: PrismaService) {}

  async create(createTipoVentaDto: CreateTipoVentaDto) {
    try {
      const data = {
        ...createTipoVentaDto,
        FechaRegistro: new Date(), 
        UsuarioRegistro: 'palomon', 
        Estado: true,
      };
      return this.prisma.tipoVenta.create({ data }); 
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error al crear TipoVenta:', errorMessage); 
      throw new InternalServerErrorException('Error al crear el tipo de venta.');
    }
  }

  async findAll() {
    return this.prisma.tipoVenta.findMany({
      where: { Estado: true }
    });
  }

  async findOne(id: number) {
    const tipoVenta = await this.prisma.tipoVenta.findUnique({
      where: { IdTipoVenta: id, Estado: true },
    });

    if (!tipoVenta) {
      throw new NotFoundException(`TipoVenta con ID ${id} no encontrado o inactivo.`);
    }

    return tipoVenta;
  }

  async update(id: number, updateTipoVentaDto: UpdateTipoVentaDto) {
    try {
      await this.findOne(id);

      return this.prisma.tipoVenta.update({
        where: { IdTipoVenta: id },
        data: updateTipoVentaDto,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error al actualizar TipoVenta:', errorMessage);
      throw new InternalServerErrorException(`Error al actualizar el TipoVenta con ID ${id}.`);
    }
  }
}