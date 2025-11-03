import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaClienteDto } from './create-categoria_cliente.dto';

export class UpdateCategoriaClienteDto extends PartialType(CreateCategoriaClienteDto) {}
