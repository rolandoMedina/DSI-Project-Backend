import { PartialType } from '@nestjs/swagger';
import { CreateSubCatsProductoDto } from './create-sub_cats_producto.dto';

export class UpdateSubCatsProductoDto extends PartialType(CreateSubCatsProductoDto) {}
