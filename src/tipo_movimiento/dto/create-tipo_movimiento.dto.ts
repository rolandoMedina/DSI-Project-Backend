import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTipoMovimientoDto {
  @ApiProperty({
    description: 'Nombre del tipo de movimiento',
    example: 'Venta',
  })
  @IsString()
  Nombre: string;

  @ApiPropertyOptional({
    description: 'Código identificador del tipo de movimiento',
    example: 'VENTA-001',
  })
  @IsOptional()
  @IsString()
  Codigo?: string;

  @ApiPropertyOptional({
    description: 'Descripción opcional del tipo de movimiento',
    example: 'Movimiento correspondiente a las ventas de productos',
  })
  @IsOptional()
  @IsString()
  Descripcion?: string;
}
