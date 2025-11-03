import { Module } from '@nestjs/common';
import { CategoriaClienteService } from './categoria_cliente.service';
import { CategoriaClienteController } from './categoria_cliente.controller';

@Module({
  controllers: [CategoriaClienteController],
  providers: [CategoriaClienteService],
})
export class CategoriaClienteModule {}
