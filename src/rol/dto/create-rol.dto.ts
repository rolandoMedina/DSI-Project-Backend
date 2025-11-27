import { ApiProperty } from '@nestjs/swagger';

export class CreateRolDto {
  @ApiProperty({ required: true, example: 'Administrador' })
  Nombre: string;

  @ApiProperty({ required: false, example: true })
  Estado?: boolean;
}
