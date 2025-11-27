import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVentaDto: CreateVentaDto) {
    return this.prisma.venta.create({
      data: createVentaDto, // solo campos directos del modelo
    });
  }

  findAll() {
    return this.prisma.venta.findMany({
      include: {
        Cliente: true,
        TipoVenta: true,
        DetalleVenta: true,
        DetalleCXC: true,
      },
    });
  }

  findOne(IdVenta: number) {
    return this.prisma.venta.findUnique({
      where: { IdVenta },
      include: {
        Cliente: true,
        TipoVenta: true,
        DetalleVenta: true,
        DetalleCXC: true,
      },
    });
  }

  update(IdVenta: number, updateVentaDto: UpdateVentaDto) {
    return this.prisma.venta.update({
      where: { IdVenta },
      data: updateVentaDto,
    });
  }

  remove(IdVenta: number) {
    return this.prisma.venta.delete({
      where: { IdVenta },
    });
  }
}