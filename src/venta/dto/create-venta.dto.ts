export class CreateVentaDto {
  NoVenta?: string;
  IdCliente: number;
  Credito: boolean;
  Observaciones?: string;
  EnviarA?: string;
  FechaRegistro: Date;
  UsuarioRegistro: string;
  Estado: boolean;
  Ubicacion?: string;
  IdTipoVenta?: number; // opcional, tiene default 1
  FechaEntrega?: Date;
  FechaRecepcion?: Date;
  WAMID?: string;
}