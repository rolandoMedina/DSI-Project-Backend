import { Module } from '@nestjs/common';
import { SubCatsProductoService } from './sub_cats_producto.service';
import { SubCatsProductoController } from './sub_cats_producto.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SubCatsProductoController],
  providers: [SubCatsProductoService],
  imports: [PrismaModule]
})
export class SubCatsProductoModule {}
