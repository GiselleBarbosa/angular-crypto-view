import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.scss'],
  standalone: true,
  imports: [NavigationMenuComponent, CardModule],
})
export class OverlayMenuComponent {}
