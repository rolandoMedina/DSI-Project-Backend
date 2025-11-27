/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UnidadMedidaService } from './unidad_medida.service';
import { UnidadMedidaController } from './unidad_medida.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UnidadMedidaController],
  providers: [UnidadMedidaService],
})
export class UnidadMedidaModule {}