/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUnidadMedidaDto {

  @ApiProperty({
    description: 'Nombre completo de la unidad de medida (ej: Kilogramo)',
    example: 'Caja',
  })
  @IsNotEmpty() 
  @IsString()
  Nombre: string;

  @ApiPropertyOptional({
    description: 'Abreviatura de la unidad de medida (ej: Kg)',
    example: 'CAJ',
  })
  @IsOptional()
  @IsString()
  Abreviatura?: string;
}