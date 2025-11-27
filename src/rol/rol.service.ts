import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRolDto) {
    return this.prisma.rol.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.rol.findMany();
  }

  findOne(id: number) {
    return this.prisma.rol.findUnique({
      where: { IdRol: id },
    });
  }

  update(id: number, dto: UpdateRolDto) {
    return this.prisma.rol.update({
      where: { IdRol: id },
      data: dto,
    });
  }
}


