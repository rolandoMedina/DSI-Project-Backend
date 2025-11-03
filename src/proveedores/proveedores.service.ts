import { Injectable } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProveedoresService {
  constructor(private prisma: PrismaService) {
  }

  create(createProveedoreDto: CreateProveedoreDto) {
    return this.prisma.proveedor.create({
      data: {
        ...createProveedoreDto,
        FechaRegistro: new Date(),
        Estado: true,
      },
    });
  }

  findAll() {
    return this.prisma.proveedor.findMany();
  }

  findOne(id: number) {
    return this.prisma.proveedor.findUnique({ where: { IdProveedor: id } })
  }

  update(id: number, updateProveedoreDto: UpdateProveedoreDto) {
    return this.prisma.proveedor.update({ where: { IdProveedor: id }, data: updateProveedoreDto });
  }
}
