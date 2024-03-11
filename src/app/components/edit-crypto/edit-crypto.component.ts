import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { CryptoService } from 'src/app/core/services/crypto.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-crypto',
  templateUrl: './edit-crypto.component.html',
  styleUrls: ['./edit-crypto.component.scss'],
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
})
export class EditCryptoComponent implements OnInit, OnDestroy {
  private cryptoService = inject(CryptoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private subscription!: Subscription;

  private id!: string | null;
  private formBuilder = inject(FormBuilder);

  public form!: FormGroup;

  public ngOnInit(): void {
    this.formInitialize();
    this.getIdByRoute();
    this.fillDataForm();
  }

  public getIdByRoute(): void {
    this.subscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }

  public fillDataForm(): void {
    this.cryptoService.listById(this.id).subscribe(criptomoeda => {
      this.form.patchValue({
        ativo: criptomoeda.ativo,
        simbolo: criptomoeda.simbolo,
        quantidade: criptomoeda.quantidade,
        valorPago: criptomoeda.valorPago,
        valorAtual: criptomoeda.valorAtual,
        dataCompra: criptomoeda.dataCompra,
      });
    });
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
    const dadosDoFormulario = this.form.getRawValue();

    if (this.form.valid) {
      this.cryptoService.updateCrypto(this.id, dadosDoFormulario).subscribe();
      alert('Criptomoeda atualizada com sucesso!');
      this.router.navigate(['/listar-criptomoedas']);
    } else {
      alert('Houve um erro');
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
