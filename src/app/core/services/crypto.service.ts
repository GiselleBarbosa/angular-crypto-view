import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  public listarCriptomoedas(): Observable<Criptomoedas[]> {
    return this.http.get<Criptomoedas[]>(this.apiUrl).pipe(
      tap(criptoList => this.cryptoSubject.next(criptoList)),
      catchError(error => {
        console.error('Erro ao listar criptomoedas', error);
        throw error;
      })
    );
  }

  public saveCrypto(cripto: Criptomoedas): Observable<Criptomoedas> {
    return this.http.post<Criptomoedas>(this.apiUrl, cripto).pipe(
      tap(newCrypto => {
        const currentList = this.cryptoSubject.getValue();
        this.cryptoSubject.next([...currentList, newCrypto]);
      }),
      catchError(error => {
        console.error('Erro ao salvar criptomoeda', error);
        throw error;
      })
    );
  }

  public deleteCrypto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const updatedList = this.cryptoSubject
          .getValue()
          .filter(crypto => crypto.id !== id);
        this.cryptoSubject.next(updatedList);
      }),
      catchError(error => {
        console.error('Erro ao excluir criptomoeda', error);
        throw error;
      })
    );
  }

  public updateCrypto(updatedCrypto: Criptomoedas): Observable<Criptomoedas> {
    return this.http
      .put<Criptomoedas>(`${this.apiUrl}/${updatedCrypto.id}`, updatedCrypto)
      .pipe(
        tap(() => {
          const updatedList = this.cryptoSubject.getValue().map(crypto => {
            if (crypto.id === updatedCrypto.id) {
              return updatedCrypto;
            }
            return crypto;
          });
          this.cryptoSubject.next(updatedList);
        }),
        catchError(error => {
          console.error('Erro ao atualizar criptomoeda', error);
          throw error;
        })
      );
  }
}
