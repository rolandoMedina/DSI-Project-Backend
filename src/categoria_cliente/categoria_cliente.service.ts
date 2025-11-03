import { Injectable } from '@nestjs/common';
import { CreateCategoriaClienteDto } from './dto/create-categoria_cliente.dto';
import { UpdateCategoriaClienteDto } from './dto/update-categoria_cliente.dto';

@Injectable()
export class CategoriaClienteService {
  create(createCategoriaClienteDto: CreateCategoriaClienteDto) {
    return 'This action adds a new categoriaCliente';
  }

  findAll() {
    return `This action returns all categoriaCliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaCliente`;
  }

  update(id: number, updateCategoriaClienteDto: UpdateCategoriaClienteDto) {
    return `This action updates a #${id} categoriaCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaCliente`;
  }
}
