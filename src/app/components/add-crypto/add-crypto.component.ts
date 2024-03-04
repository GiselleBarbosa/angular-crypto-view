import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { first } from 'rxjs';
import { CryptoService } from 'src/app/core/services/crypto.service';

@Component({
  selector: 'app-add-crypto',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink,
    CurrencyPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './add-crypto.component.html',
  styleUrls: ['./add-crypto.component.scss'],
})
export class AddCryptoComponent implements OnInit {
  public cryptoService = inject(CryptoService);

  private formBuilder = inject(FormBuilder);

  public form!: FormGroup;

  public ngOnInit(): void {
    this.formInitialize();
  }

  public formInitialize(): void {
    this.form = this.formBuilder.group({
      criptoNome: [null, Validators.required],
      criptoSimbolo: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ]),
      ],
      totalCripto: [null, Validators.required],
    });
  }

  public saveData(): void {
    const dadosDoFormulario = this.form.getRawValue();

    if (this.form.valid) {
      this.cryptoService
        .salvarCriptomoeda(dadosDoFormulario)
        .pipe(first())
        .subscribe();
      alert('Criptomoeda cadastrada com sucesso!');
    } else {
      alert('Houve um erro');
    }
  }
}
