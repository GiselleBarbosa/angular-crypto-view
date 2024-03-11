import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  standalone: true,
  imports: [MenuModule],
})
export class NavigationMenuComponent implements OnInit {
  public items!: MenuItem[];

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Página inícial',
        icon: 'pi pi-home',
        routerLink: 'home',
      },

      {
        label: 'Lista',
        icon: 'pi pi-bitcoin',
        routerLink: 'listar-criptomoedas',
      },

      {
        label: 'Adicionar nova',
        icon: 'pi pi-plus',
        routerLink: 'cadastrar-criptomoeda',
      },
      {
        label: 'Acompanhe o mercado',
        icon: 'pi pi-chart-bar',
        routerLink: 'home',
      },
    ];
  }
}
