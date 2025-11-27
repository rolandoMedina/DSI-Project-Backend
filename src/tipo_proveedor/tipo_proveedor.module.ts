/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TipoProveedorService } from './tipo_proveedor.service';
import { TipoProveedorController } from './tipo_proveedor.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [TipoProveedorController],
  providers: [TipoProveedorService],
})
export class TipoProveedorModule {}