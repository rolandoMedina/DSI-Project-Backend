import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({
      where: { IdCliente: id },
    });
  }

  update(id: number, dto: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { IdCliente: id },
      data: dto,
    });
  }
}

