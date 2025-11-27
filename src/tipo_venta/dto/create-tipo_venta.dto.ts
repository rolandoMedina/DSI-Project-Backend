/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTipoVentaDto {

  @ApiProperty({
    description: 'Nombre del tipo de venta (ej: Contado o Crédito)',
    example: 'Contado',
  })
  @IsNotEmpty() 
  @IsString()
  Nombre: string;

  @ApiPropertyOptional({
    description: 'Descripción del tipo de venta',
    example: 'Venta realizada con pago inmediato.',
  })
  @IsOptional() 
  @IsString()
  Descripcion?: string;
}