import { ApiProperty } from '@nestjs/swagger';

export class CreateCompraDto {
  @ApiProperty({ required: false })
  NoOrden?: string;

  @ApiProperty()
  IdProveedor: number;

  @ApiProperty()
  Aprobada: boolean;

  @ApiProperty({ required: false })
  Observaciones?: string;

  @ApiProperty()
  FechaRegistro: Date;

  @ApiProperty()
  UsuarioRegistro: string;

  @ApiProperty()
  Estado: boolean;
}
