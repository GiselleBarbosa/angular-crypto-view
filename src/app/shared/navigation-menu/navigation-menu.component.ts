import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() public command = new EventEmitter();

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: 'home',
        command: () => this.command.emit(),
      },

      {
        label: 'Lista completa',
        icon: 'pi pi-bitcoin',
        routerLink: 'listar-criptomoedas',
        command: () => this.command.emit(),
      },

      {
        label: 'Adicionar',
        icon: 'pi pi-plus',
        routerLink: 'cadastrar-criptomoeda',
        command: () => this.command.emit(),
      },
      {
        label: 'Mercado',
        icon: 'pi pi-chart-bar',
        routerLink: 'novidades',
        command: () => this.command.emit(),
      },
    ];
  }
}
