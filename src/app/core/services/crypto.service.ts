import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crypto } from '../interfaces/Crypto.interface';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private readonly STORAGE_KEY = 'cryptoList';
  private cryptoList: Crypto[] = [];

  private cryptoSubject = new BehaviorSubject<Crypto[]>([]);
  public readonly crypto$ = this.cryptoSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    const storedCryptoList = localStorage.getItem(this.STORAGE_KEY);
    if (storedCryptoList) {
      this.cryptoList = JSON.parse(storedCryptoList);
      this.cryptoSubject.next(this.cryptoList);
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cryptoList));
  }

  public saveCrypto(cripto: Crypto): void {
    this.cryptoList.push(cripto);
    this.saveToLocalStorage();
    this.cryptoSubject.next(this.cryptoList);
  }

  public listarCriptomoedas(): void {
    this.loadFromLocalStorage();
  }

  public deleteCrypto(index: number): void {
    if (index >= 0 && index < this.cryptoList.length) {
      this.cryptoList.splice(index, 1);
      this.saveToLocalStorage();
      this.cryptoSubject.next(this.cryptoList);
    }
  }

  public updateCrypto(index: number, updatedCrypto: Crypto): void {
    if (index >= 0 && index < this.cryptoList.length) {
      this.cryptoList[index] = updatedCrypto;
      this.saveToLocalStorage();
      this.cryptoSubject.next(this.cryptoList);
    }
  }
}
