import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty()
  IdCategoriaCliente: number;

  @ApiProperty({ required: false })
  Codigo?: string;

  @ApiProperty({ required: false })
  Direccion?: string;

  @ApiProperty({ required: false })
  Telefono?: string;

  @ApiProperty()
  PersonaNatural: boolean;

  @ApiProperty()
  FechaRegistro: Date;

  @ApiProperty()
  Estado: boolean;

  @ApiProperty({ required: false })
  UsuarioRegistro?: string; // tiene default en BD

  @ApiProperty({ required: false })
  UsuarioUltMod?: string;

  @ApiProperty({ required: false })
  FechaUltMod?: Date;

  @ApiProperty({ required: false })
  IdDepartamento?: number; // default = 1

  @ApiProperty({ required: false })
  IdMunicipio?: number;

  @ApiProperty({ required: false })
  Nombre?: string; // default = "Vacio"
}
