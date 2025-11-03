import { Module } from '@nestjs/common';
import { CategoriaClienteService } from './categoria_cliente.service';
import { CategoriaClienteController } from './categoria_cliente.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CategoriaClienteController],
  providers: [CategoriaClienteService],
  imports: [PrismaModule]
})
export class CategoriaClienteModule {}
