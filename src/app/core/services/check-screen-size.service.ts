import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckScreenSizeService {
  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth < 960);
  public isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      this.checkSize();
    });
  }

  private checkSize(): void {
    const isMobile = window.innerWidth < 960;
    this.isMobileSubject.next(isMobile);
  }

  public getIsMobile(): Observable<boolean> {
    return this.isMobile$;
  }
}
