import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CryptoService } from 'src/app/core/services/crypto.service';

@Component({
  selector: 'app-list-crypto',
  templateUrl: './list-crypto.component.html',
  styleUrls: ['./list-crypto.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, AsyncPipe, NgIf, NgFor, TableModule],
})
export class ListCryptoComponent implements OnInit {
  private cryptoService = inject(CryptoService);

  public crypto$ = this.cryptoService.crypto$;

  ngOnInit(): void {
    this.cryptoService.listarCriptomoedas();
  }
}
