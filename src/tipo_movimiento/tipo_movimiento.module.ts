import { Module } from '@nestjs/common';
import { TipoMovimientoService } from './tipo_movimiento.service';
import { TipoMovimientoController } from './tipo_movimiento.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TipoMovimientoController],
  providers: [TipoMovimientoService],
  imports: [PrismaModule],
})
export class TipoMovimientoModule {}
