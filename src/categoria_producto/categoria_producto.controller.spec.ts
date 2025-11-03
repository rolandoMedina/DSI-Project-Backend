import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaProductoController } from './categoria_producto.controller';
import { CategoriaProductoService } from './categoria_producto.service';

describe('CategoriaProductoController', () => {
  let controller: CategoriaProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaProductoController],
      providers: [CategoriaProductoService],
    }).compile();

    controller = module.get<CategoriaProductoController>(CategoriaProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
