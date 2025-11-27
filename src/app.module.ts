import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { CategoriaClienteModule } from './categoria_cliente/categoria_cliente.module';
import { ClienteModule } from './cliente/cliente.module';
import { CompraModule } from './compra/compra.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [PrismaModule, ProveedoresModule, CategoriaClienteModule, ClienteModule, CompraModule, RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
