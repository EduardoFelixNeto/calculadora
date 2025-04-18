import { Component } from '@angular/core';

@Component({
  selector: 'app-subtracao',
  imports: [],
  templateUrl: './subtracao.component.html',
  standalone: true,
  styleUrl: './subtracao.component.css'
})
export class SubtracaoComponent {
  private res: number = 0;

  constructor() {}

  subtrairBotao(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.res = n1 - n2;
  }

  get resultado(): string {
    return this.res.toString();
  }
}
