import { Component } from '@angular/core';

@Component({
  selector: 'app-divisao',
  imports: [],
  templateUrl: './divisao.component.html',
  standalone: true,
  styleUrl: './divisao.component.css'
})
export class DivisaoComponent {
    private res: number = 0;

    constructor() {}

    dividirBotao(numero1: string, numero2: string): void {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        this.res = n1 / n2;
    }

    get resultado(): string {
        return this.res.toString();
    }
}
