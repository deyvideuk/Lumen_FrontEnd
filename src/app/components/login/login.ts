import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [
    BtnPrimary,
    ReactiveFormsModule,
    CommonModule
],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  subscribeForm!: FormGroup;

  constructor(){
    this.subscribeForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6) // mínimo 6 caracteres
        ]),
        rePassword: new FormControl('', [Validators.required])
      },
      { validators: this.passwordsMatchValidator } // <-- validação customizada
    );
  }

  // Validador customizado para confirmar senha
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const rePassword = control.get('rePassword')?.value;
    if (password && rePassword && password !== rePassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmitRegister() {
    if (this.subscribeForm.valid) {
      alert('Cadastro realizado!');
      console.log(this.subscribeForm.value);
    } else {
      this.subscribeForm.markAllAsTouched(); // força mostrar erros
    }
  }

  slide(){
    const teste = document.querySelector('.login-login') as HTMLElement;
    let count = 0;

    if(count == 0){
      teste.style.right = "0";
      teste.style.transition = "1s";
      count = 1;
    }else{
      teste.style.right = "940px";
      teste.style.transition = "1s";
      count = 0;
    }
  }
}
