import { Component } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
