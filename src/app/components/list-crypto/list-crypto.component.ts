import {
  CommonModule,
  CurrencyPipe,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CryptoService } from 'src/app/core/services/crypto.service';
import { Crypto } from './../../core/interfaces/Crypto.interface';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-crypto',
  templateUrl: './list-crypto.component.html',
  styleUrls: ['./list-crypto.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    NgFor,
    UpperCasePipe,
    CurrencyPipe,
    ButtonModule,
  ],
})
export class ListCryptoComponent implements OnInit {
  private cryptoService = inject(CryptoService);

  public tableTitles = [
    'Ativo',
    'Símbolo',
    'Quantidade',
    'Valor pago',
    'Valor atual',
    'Data da compra',
    'Total',
    'Ações',
  ];

  public crypto$ = this.cryptoService.crypto$;
  public criptomoedas!: Crypto[];

  ngOnInit(): void {
    this.cryptoService.crypto$.subscribe((criptomoedas) => {
      this.criptomoedas = criptomoedas;
    });
  }

  public deleteCrypto(index: number): void {
    console.log(index);
    this.cryptoService.deleteCrypto(index);
  }
}
