import { Module } from '@nestjs/common';
import { CategoriaProductoService } from './categoria_producto.service';
import { CategoriaProductoController } from './categoria_producto.controller';

@Module({
  controllers: [CategoriaProductoController],
  providers: [CategoriaProductoService],
})
export class CategoriaProductoModule {}
