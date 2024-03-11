import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bitcoin } from '../interfaces/bitcoin.interface';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  private bitcoinApiUrl = 'https://economia.awesomeapi.com.br/json/last/BTC-BRL';

  private http = inject(HttpClient);

  public getBitcoinData(): Observable<Bitcoin> {
    return this.http.get<Bitcoin>(this.bitcoinApiUrl);
  }
}
