import { PartialType } from '@nestjs/swagger';
import { CreateTipoMovimientoDto } from './create-tipo_movimiento.dto';

export class UpdateTipoMovimientoDto extends PartialType(CreateTipoMovimientoDto) {}
