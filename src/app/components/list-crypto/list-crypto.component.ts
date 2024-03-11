import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { combineLatest } from 'rxjs';
import { Bitcoin } from 'src/app/core/interfaces/bitcoin.interface';
import { CryptoService } from 'src/app/core/services/crypto.service';
import { Crypto } from './../../core/interfaces/Crypto.interface';
import { BitcoinService } from './../../core/services/bitcoin.service';

@Component({
  selector: 'app-list-crypto',
  templateUrl: './list-crypto.component.html',
  styleUrls: ['./list-crypto.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, NgFor, UpperCasePipe],
})
export class ListCryptoComponent implements OnInit {
  private bitcoinService = inject(BitcoinService);
  private cryptoService = inject(CryptoService);

  public bitcoinCurrent!: Bitcoin;

  public tableTitles = [
    'Ativo',
    'Símbolo',
    'Quantidade',
    'Valor pago',
    'Valor atual',
    'Data da compra',
    'Total',
  ];

  public crypto$ = this.cryptoService.crypto$;
  public criptomoedas!: Crypto[];

  ngOnInit(): void {
    combineLatest([
      this.bitcoinService.getBitcoinData(),
      this.cryptoService.crypto$,
    ]).subscribe(([bitcoin, criptomoedas]) => {
      this.bitcoinCurrent = bitcoin;
      this.criptomoedas = criptomoedas;
      console.log(this.bitcoinCurrent);
    });
  }
}
