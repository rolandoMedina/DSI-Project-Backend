/* eslint-disable prettier/prettier */
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoriaClienteDto {
  @ApiProperty({
    description: 'Nombre de la categoría del cliente',
    example: 'Cliente Premium',
  })
  @IsString()
  Nombre: string;

  @ApiPropertyOptional({
    description: 'Descripción opcional de la categoría del cliente',
    example: 'Clientes con más de 5 años de antigüedad y volumen alto de compras',
  })
  @IsOptional()
  @IsString()
  Descripcion?: string;
}