/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateUnidadMedidaDto } from './dto/create-unidad_medida.dto';
import { UpdateUnidadMedidaDto } from './dto/update-unidad_medida.dto';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class UnidadMedidaService {
  constructor(private prisma: PrismaService) {}

  async create(createUnidadMedidaDto: CreateUnidadMedidaDto) {
    try {
      const data = {
        ...createUnidadMedidaDto,
        FechaRegistro: new Date(), 
        UsuarioRegistro: 'SeñorMiyagi', 
        Estado: true,
      };
      return this.prisma.unidadMedida.create({ data }); 
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error al crear UnidadMedida:', errorMessage); 
      throw new InternalServerErrorException('Error al crear la unidad de medida.');
    }
  }

  async findAll() {
    return this.prisma.unidadMedida.findMany({
      where: { Estado: true }
    });
  }

  async findOne(id: number) {
    const unidadMedida = await this.prisma.unidadMedida.findUnique({
      where: { IdUnidadMedida: id, Estado: true },
    });

    if (!unidadMedida) {
      throw new NotFoundException(`UnidadMedida con ID ${id} no encontrada o inactiva.`);
    }

    return unidadMedida;
  }

  async update(id: number, updateUnidadMedidaDto: UpdateUnidadMedidaDto) {
    try {
      await this.findOne(id);

      return this.prisma.unidadMedida.update({
        where: { IdUnidadMedida: id },
        data: updateUnidadMedidaDto,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error al actualizar UnidadMedida:', errorMessage);
      throw new InternalServerErrorException(`Error al actualizar la UnidadMedida con ID ${id}.`);
    }
  }
}