import { Injectable } from '@nestjs/common';
import { CreateSubCatsProductoDto } from './dto/create-sub_cats_producto.dto';
import { UpdateSubCatsProductoDto } from './dto/update-sub_cats_producto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubCatsProductoService {
  constructor(private prisma: PrismaService) {
  }

  create(createSubCatsProductoDto: CreateSubCatsProductoDto) {
    return 'This action adds a new subCatsProducto';
  }

  findAll() {
    return this.prisma.subCategoriaProd.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} subCatsProducto`;
  }

  update(id: number, updateSubCatsProductoDto: UpdateSubCatsProductoDto) {
    return `This action updates a #${id} subCatsProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCatsProducto`;
  }
}
