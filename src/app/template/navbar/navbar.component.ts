import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { CheckScreenSizeService } from 'src/app/core/services/check-screen-size.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    RouterLink,
    CommonModule,
    SidebarComponent,
    NgIf,
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private checkScreenSizeService = inject(CheckScreenSizeService);

  private unsubscription!: Subscription;

  public items!: MenuItem[];
  public isMobile = false;
  public ngOnInit(): void {
    this.checkScreenSize();

    this.items = [
      {
        label: 'ADMINISTRADOR',
        icon: 'pi pi-database',
        styleClass: 'title',
        routerLink: 'administrador/lista-funcionarios',
        items: [],
      },

      {
        label: 'FUNCIONÁRIOS',
        icon: 'pi pi-user',
        styleClass: 'title',
        routerLink: '/funcionarios/funcionario-perfil',
        items: [],
      },
    ];
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
