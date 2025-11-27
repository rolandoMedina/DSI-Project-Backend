/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTipoProveedorDto {

  @ApiProperty({
    description: 'Nombre del tipo de proveedor',
    example: 'Mayorista',
  })
  @IsNotEmpty() 
  @IsString()
  Nombre: string;

  @ApiPropertyOptional({
    description: 'Observaciones o detalles del tipo de proveedor',
    example: 'Proveedores que manejan gran volumen de insumos.',
  })
  @IsOptional()
  @IsString()
  Observaciones?: string;
}