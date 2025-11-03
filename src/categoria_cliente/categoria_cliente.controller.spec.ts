import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaClienteController } from './categoria_cliente.controller';
import { CategoriaClienteService } from './categoria_cliente.service';

describe('CategoriaClienteController', () => {
  let controller: CategoriaClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaClienteController],
      providers: [CategoriaClienteService],
    }).compile();

    controller = module.get<CategoriaClienteController>(CategoriaClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
