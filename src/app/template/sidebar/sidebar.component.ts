import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { NavigationMenuComponent } from '../../shared/navigation-menu/navigation-menu.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [SidebarModule, ButtonModule, NavigationMenuComponent],
})
export class SidebarComponent implements OnInit {
  public sidebarVisible = false;

  public items: MenuItem[] | undefined;

  public ngOnInit(): void {}

  public toogleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
