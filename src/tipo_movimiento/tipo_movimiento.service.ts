import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTipoMovimientoDto } from './dto/create-tipo_movimiento.dto';
import { UpdateTipoMovimientoDto } from './dto/update-tipo_movimiento.dto';

@Injectable()
export class TipoMovimientoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTipoMovimientoDto: CreateTipoMovimientoDto) {
    return this.prisma.tipoMovimiento.create({
      data: {
        ...createTipoMovimientoDto,
        UsuarioRegistro: 'default',
        FechaRegistro: new Date(),
        Estado: true,
      },
    });
  }

  findAll() {
    return this.prisma.tipoMovimiento.findMany();
  }

  findOne(id: number) {
    return this.prisma.tipoMovimiento.findUnique({
      where: { IdTipoMovimiento: id },
    });
  }

  update(id: number, updateTipoMovimientoDto: UpdateTipoMovimientoDto) {
    return this.prisma.tipoMovimiento.update({
      where: { IdTipoMovimiento: id },
      data: updateTipoMovimientoDto,
    });
  }

  remove(id: number) {
    return this.prisma.tipoMovimiento.delete({
      where: { IdTipoMovimiento: id },
    });
  }
}
