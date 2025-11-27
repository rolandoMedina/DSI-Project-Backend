/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateTipoVentaDto } from './create-tipo_venta.dto';

export class UpdateTipoVentaDto extends PartialType(CreateTipoVentaDto) {}