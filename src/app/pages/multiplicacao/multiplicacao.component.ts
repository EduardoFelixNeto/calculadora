import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacao',
  imports: [],
  templateUrl: './multiplicacao.component.html',
  standalone: true,
  styleUrl: './multiplicacao.component.css'
})
export class MultiplicacaoComponent {
  private res: number = 0;

  constructor() {}

  multiplicarBotao(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.res = n1 * n2;
  }

  get resultado(): string {
    return this.res.toString();
  }

}
