import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompraService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCompraDto) {
    return this.prisma.compra.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.compra.findMany();
  }

  findOne(id: number) {
    return this.prisma.compra.findUnique({
      where: { IdCompra: id },
    });
  }

  update(id: number, dto: UpdateCompraDto) {
    return this.prisma.compra.update({
      where: { IdCompra: id },
      data: dto,
    });
  }
}

