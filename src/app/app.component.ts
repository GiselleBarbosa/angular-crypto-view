import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from './template/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './template/footer/footer.component';
import { OverlayMenuComponent } from './shared/overlay-menu/overlay-menu.component';
import { CheckScreenSizeService } from './core/services/check-screen-size.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CardModule,
    FooterComponent,
    OverlayMenuComponent,
    NgIf,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private primengConfig = inject(PrimeNGConfig);
  private checkScreenSizeService = inject(CheckScreenSizeService);
  private unsubscription!: Subscription;

  public isMobile = false;

  public ngOnInit(): void {
    this.primengSettings();
    this.checkScreenSize();
  }

  private primengSettings(): void {
    this.primengConfig.ripple = true;

    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }
  public checkScreenSize(): void {
    this.unsubscription = this.checkScreenSizeService
      .getIsMobile()
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }
}
