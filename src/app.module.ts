/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { CategoriaClienteModule } from './categoria_cliente/categoria_cliente.module';
import { ClienteModule } from './cliente/cliente.module';
import { CompraModule } from './compra/compra.module';
import { TipoMovimientoModule } from './tipo_movimiento/tipo_movimiento.module';
import { ProductosModule } from './productos/productos.module';
import { SubCatsProductoModule } from './sub_cats_producto/sub_cats_producto.module';
import { TipoProveedorModule } from './tipo_proveedor/tipo_proveedor.module';
import { TipoVentaModule } from './tipo_venta/tipo_venta.module';
import { UnidadMedidaModule } from './unidad_medida/unidad_medida.module';

@Module({
  imports: [PrismaModule, ProveedoresModule, CategoriaClienteModule, TipoMovimientoModule, ProductosModule, SubCatsProductoModule, ClienteModule, CompraModule, TipoProveedorModule, TipoVentaModule, UnidadMedidaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
