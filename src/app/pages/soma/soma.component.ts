import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  imports: [],
  templateUrl: './soma.component.html',
  standalone: true,
  styleUrl: './soma.component.css'
})
export class SomaComponent {
  private res: number = 0;

  constructor() {}

  somarBotao(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.res = n1 + n2;
  }

  get resultado(): string {
    return this.res.toString();
  }
}
