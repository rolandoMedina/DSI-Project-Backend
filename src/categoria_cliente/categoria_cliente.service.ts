import { Injectable } from '@nestjs/common';
import { CreateCategoriaClienteDto } from './dto/create-categoria_cliente.dto';
import { UpdateCategoriaClienteDto } from './dto/update-categoria_cliente.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriaClienteService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoriaClienteDto: CreateCategoriaClienteDto) {
    return this.prisma.categoriaCliente.create({
      data: {
        ...createCategoriaClienteDto,
        UsuarioRegistro: 'default',
        FechaRegistro: new Date(),
        Estado: true,
      },
    });
  }

  findAll() {
    return this.prisma.categoriaCliente.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoriaCliente.findUnique({ where: { IdCategoriaCliente: id } })
  }

  update(id: number, updateCategoriaClienteDto: UpdateCategoriaClienteDto) {
    return this.prisma.categoriaCliente.update({ where: { IdCategoriaCliente: id }, data: updateCategoriaClienteDto });
  }
}
