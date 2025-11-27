import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { CategoriaClienteModule } from './categoria_cliente/categoria_cliente.module';
import { TipoMovimientoModule } from './tipo_movimiento/tipo_movimiento.module';
import { ProductosModule } from './productos/productos.module';
import { SubCatsProductoModule } from './sub_cats_producto/sub_cats_producto.module';

@Module({
  imports: [PrismaModule, ProveedoresModule, CategoriaClienteModule, TipoMovimientoModule, ProductosModule, SubCatsProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
