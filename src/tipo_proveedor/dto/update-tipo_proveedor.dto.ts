/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateTipoProveedorDto } from './create-tipo_proveedor.dto';

export class UpdateTipoProveedorDto extends PartialType(CreateTipoProveedorDto) {}