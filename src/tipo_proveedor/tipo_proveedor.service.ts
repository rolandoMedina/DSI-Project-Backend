/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateTipoProveedorDto } from './dto/create-tipo_proveedor.dto'; 
import { UpdateTipoProveedorDto } from './dto/update-tipo_proveedor.dto'; 
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class TipoProveedorService {
  constructor(private prisma: PrismaService) {}

  async create(createTipoProveedorDto: CreateTipoProveedorDto) {
    try {
      const data = {
        ...createTipoProveedorDto,
        FechaRegistro: new Date(), 
        UsuarioRegistro: 'drigopin', 
        Estado: true,
      };
      
      return this.prisma.tipoProveedor.create({ data });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error al crear TipoProveedor:', errorMessage); 
      throw new InternalServerErrorException('Error al crear el tipo de proveedor.');
    }
  }

  async findOne(id: number) {
    const tipoProveedor = await this.prisma.tipoProveedor.findUnique({
      where: { IdTipoProveedor: id, Estado: true },
    });

    if (!tipoProveedor) {
      throw new NotFoundException(`TipoProveedor con ID ${id} no encontrado o inactivo.`);
    }

    return tipoProveedor;
  }
  
  async findAll() {
    return this.prisma.tipoProveedor.findMany({
      where: { Estado: true }
    });
  }

  async update(id: number, updateTipoProveedorDto: UpdateTipoProveedorDto) {
    try {
      await this.findOne(id);

      return this.prisma.tipoProveedor.update({
        where: { IdTipoProveedor: id },
        data: updateTipoProveedorDto,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error al actualizar TipoProveedor:', errorMessage);
      
      throw new InternalServerErrorException(`Error al actualizar el TipoProveedor con ID ${id}.`);
    }
  }
}