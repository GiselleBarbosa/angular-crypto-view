import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CryptoInterface } from '../interfaces/Crypto.interface';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  public cryptoList: CryptoInterface[] = [];

  private cryptoSubject = new BehaviorSubject(this.cryptoList);
  public readonly crypto$ = this.cryptoSubject.asObservable();

  public salvarCriptomoeda(
    cripto: CryptoInterface
  ): Observable<CryptoInterface[]> {
    this.cryptoList.push(cripto);
    this.cryptoSubject.next(this.cryptoList);
    console.log(this.cryptoList);
    return this.crypto$;
  }

  public listarCriptomoedas(): void {
    this.cryptoSubject.next(this.cryptoList);
  }
}
