import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
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
    ReactiveFormsModule,
  ],
  templateUrl: './add-crypto.component.html',
  styleUrls: ['./add-crypto.component.scss'],
})
export class AddCryptoComponent implements OnInit {
  private cryptoService = inject(CryptoService);
  private router = inject(Router);

  private formBuilder = inject(FormBuilder);

  public form!: FormGroup;

  public ngOnInit(): void {
    this.formInitialize();
  }

  public formInitialize(): void {
    this.form = this.formBuilder.group({
      ativo: [null, Validators.required],
      simbolo: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ]),
      ],
      quantidade: [null, Validators.required],
      valorPago: [null, Validators.required],
      valorAtual: [null, Validators.required],
      dataCompra: [null, Validators.required],
    });
  }

  public saveData(): void {
    Object.keys(this.form.controls).forEach(controlName => {
      const control = this.form.get(controlName);
      console.log(`Campo: ${controlName}, válido: ${control?.valid}`);
    });

    const dadosDoFormulario = this.form.getRawValue();

    console.log(dadosDoFormulario);

    if (this.form.valid) {
      this.cryptoService.saveCrypto(dadosDoFormulario);

      alert('Criptomoeda cadastrada com sucesso!');
      this.router.navigate(['/listar-criptomoedas']);
    } else {
      alert('Houve um erro');
    }
  }
}
