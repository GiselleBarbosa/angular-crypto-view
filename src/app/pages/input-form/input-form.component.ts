import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink,
    CurrencyPipe,
  ],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  public form!: FormGroup;

  public ngOnInit(): void {
    this.formInitialize();
  }

  public formInitialize(): void {
    this.form = this.formBuilder.group({
      cryptoName: [null],
      cryptoSymbol: [null],
      totalCryptoHoldings: [null],
    });
  }

  public saveData(): void {
    const dadosDoFormulario = this.form.getRawValue();

    if (this.form.valid) {
      console.log('enviar dados', dadosDoFormulario);
    }
  }
}
