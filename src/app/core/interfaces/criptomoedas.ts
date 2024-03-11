export interface Criptomoedas {
  id: string | null;
  ativo: string;
  simbolo: string;
  quantidade: number;
  valorPago: number;
  valorAtual: number;
  dataCompra: Date;
}
