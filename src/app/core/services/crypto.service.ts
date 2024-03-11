import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Criptomoedas } from '../interfaces/criptomoedas';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private apiUrl = environment.apiUrl;

  private cryptoSubject = new BehaviorSubject<Criptomoedas[]>([]);
  public readonly crypto$ = this.cryptoSubject.asObservable();

  private selectedCryptoSubject = new Subject<Criptomoedas>();
  public readonly selectedCrypto$ = this.selectedCryptoSubject.asObservable();

  private totalValue = new BehaviorSubject<number>(0);
  public readonly totalValue$ = this.totalValue.asObservable();

  constructor(private http: HttpClient) {}

  public listarCriptomoedas(): Observable<Criptomoedas[]> {
    return this.http.get<Criptomoedas[]>(this.apiUrl).pipe(
      tap(criptoList => {
        this.cryptoSubject.next(criptoList), this.calculateTotalPrice();
      }),

      catchError(error => {
        console.error('Erro ao listar criptomoedas', error);
        throw error;
      })
    );
  }

  public listById(id: string | null): Observable<Criptomoedas> {
    return this.http.get<Criptomoedas>(`${this.apiUrl}/${id}`).pipe(
      tap(cripto => this.selectedCryptoSubject.next(cripto)),
      catchError(error => {
        console.error('Erro ao lista a criptomoeda', error);
        throw error;
      })
    );
  }
  public saveCrypto(cripto: Criptomoedas): Observable<Criptomoedas> {
    return this.http.post<Criptomoedas>(this.apiUrl, cripto).pipe(
      tap(newCrypto => {
        const currentList = this.cryptoSubject.getValue();
        this.cryptoSubject.next([...currentList, newCrypto]);
        this.calculateTotalPrice();
      }),
      catchError(error => {
        console.error('Erro ao salvar criptomoeda', error);
        throw error;
      })
    );
  }

  public deleteCrypto(id: string | null): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const updatedList = this.cryptoSubject
          .getValue()
          .filter(crypto => crypto.id !== id);
        this.cryptoSubject.next(updatedList);
        this.calculateTotalPrice();
      }),
      catchError(error => {
        console.error('Erro ao excluir criptomoeda', error);
        throw error;
      })
    );
  }

  public updateCrypto(
    id: string | null,
    updatedCrypto: Criptomoedas
  ): Observable<Criptomoedas> {
    return this.http.put<Criptomoedas>(`${this.apiUrl}/${id}`, updatedCrypto).pipe(
      tap(() => {
        const updatedList = this.cryptoSubject.getValue().map(crypto => {
          if (crypto.id === id) {
            return { ...crypto, ...updatedCrypto };
          }
          return crypto;
        });
        this.cryptoSubject.next(updatedList);
        this.calculateTotalPrice();
      }),
      catchError(error => {
        console.error('Erro ao atualizar criptomoeda', error);
        throw error;
      })
    );
  }

  public calculateTotalPrice(): void {
    const totalCryptos = this.cryptoSubject.getValue();
    const totalPrice = totalCryptos.reduce(
      (total, item) => total + item.quantidade * item.valorAtual,
      0
    );

    this.totalValue.next(totalPrice); // Atualiza o BehaviorSubject com o valor calculado
  }
}
