import { Injectable } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProveedoresService {
  constructor(private prisma: PrismaService) {
  }

  create(createProveedoreDto: CreateProveedoreDto) {
    return 'This action adds a new proveedore';
  }

  findAll() {
    return this.prisma.proveedor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} proveedore`;
  }

  update(id: number, updateProveedoreDto: UpdateProveedoreDto) {
    return `This action updates a #${id} proveedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedore`;
  }
}
