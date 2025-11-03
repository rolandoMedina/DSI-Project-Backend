import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { CategoriaClienteModule } from './categoria_cliente/categoria_cliente.module';
import { TipoMovimientoModule } from './tipo_movimiento/tipo_movimiento.module';

@Module({
  imports: [PrismaModule, ProveedoresModule, CategoriaClienteModule, TipoMovimientoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
