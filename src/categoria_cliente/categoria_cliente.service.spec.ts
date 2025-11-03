import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaClienteService } from './categoria_cliente.service';

describe('CategoriaClienteService', () => {
  let service: CategoriaClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaClienteService],
    }).compile();

    service = module.get<CategoriaClienteService>(CategoriaClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
