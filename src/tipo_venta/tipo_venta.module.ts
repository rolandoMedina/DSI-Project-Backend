/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TipoVentaService } from './tipo_venta.service';
import { TipoVentaController } from './tipo_venta.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  controllers: [TipoVentaController],
  providers: [TipoVentaService],
})
export class TipoVentaModule {}