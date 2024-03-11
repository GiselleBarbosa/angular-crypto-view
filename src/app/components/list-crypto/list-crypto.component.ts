import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CryptoService } from 'src/app/core/services/crypto.service';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    AsyncPipe,
  ],
})
export class ListCryptoComponent implements OnInit, OnDestroy {
  private cryptoService = inject(CryptoService);
  private router = inject(Router);
  private unsubscription!: Subscription;

  public tableTitles = [
    'Ativo',
    'Símbolo',
    'Quantidade',
    'Preço pago',
    'Preço atual',
    'Data da compra',
    'Total',
    'Ações',
  ];

  public crypto$ = this.cryptoService.crypto$;
  public ngOnInit(): void {
    this.unsubscription = this.cryptoService.listarCriptomoedas().subscribe();
  }

  public updateCrypto(index: string | null): void {
    this.router.navigate(['editar-criptomoedas/' + index]);
  }

  public deleteCrypto(index: string | null): void {
    this.unsubscription = this.cryptoService.deleteCrypto(index).subscribe();
  }

  public ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }
}
