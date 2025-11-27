/* eslint-disable prettier/prettier */
import { IsInt, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProveedoreDto {
  @ApiProperty({
    description: 'Identificador del tipo de proveedor',
    example: 1,
  })
  @IsInt()
  IdTipoProveedor: number;

  @ApiProperty({
    description: 'Nombre del proveedor',
    example: 'Distribuidora Eléctrica Nacional',
  })
  @IsString()
  Nombre: string;

  @ApiPropertyOptional({
    description: 'Departamento donde reside el proveedor',
    example: 'Managua',
  })
  @IsOptional()
  @IsString()
  Departamento?: string;

  @ApiPropertyOptional({
    description: 'Municipio donde reside el proveedor',
    example: 'Ciudad Sandino',
  })
  @IsOptional()
  @IsString()
  Municipio?: string;

  @ApiPropertyOptional({
    description: 'Dirección física del proveedor',
    example: 'Km 8 Carretera Norte, frente a Almacenes Tropigas',
  })
  @IsOptional()
  @IsString()
  Direccion?: string;

  @ApiPropertyOptional({
    description: 'Teléfono de contacto del proveedor',
    example: '+505 8888 7777',
  })
  @IsOptional()
  @IsString()
  Telefono?: string;
}