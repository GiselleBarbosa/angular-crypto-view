import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule],
})
export class SidebarComponent implements OnInit {
  public sidebarVisible = false;

  public items: MenuItem[] | undefined;

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Página inícial',
        icon: 'pi pi-home',
        routerLink: 'home',
        command: () => this.toogleSidebar(),
      },

      {
        label: 'Lista de criptomoedas',
        icon: 'pi pi-bitcoin',
        routerLink: 'listar-criptomoedas',
        command: () => this.toogleSidebar(),
      },

      {
        label: 'Cadastrar criptomoedas',
        icon: 'pi pi-plus',
        routerLink: 'cadastrar-criptomoeda',
        command: () => this.toogleSidebar(),
      },
      {
        label: 'Acompanhe o mercado',
        icon: 'pi pi-chart-bar',
        routerLink: 'home',
        command: () => this.toogleSidebar(),
      },
    ];
  }

  public toogleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
