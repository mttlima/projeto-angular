import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Matheus ");
  public lastName = signal("Lima");
  public fullName = computed( () => {
    return this.firstName() + this.lastName()
  })
  
  public array = signal([1])

  /* 
    effect - raramente são necessários na maioria dos códigos,
    mas podem ser úteis em circunstâncias específicas.
    - Registro de dados sendo exibidos e quando eles mudam, seja para análise
      ou como ferramenta de depuração

    - Manter os dados sincronizados com o window.localStorage

    - Adicionando comportamento DOM personalizado que não pode ser expresso com
      sintaxe de modelo.

    - Executar renderização personalizada em um <canvas>, bibilioteca de gráficos
      ou outra biblioteca de UI de terceiros.
  */

  constructor () {
    effect(() => {
      console.log(this.fullName())
      if (this.firstName() === "Melissa ") {
        alert()
      }
    })
  }

  public updateName() {
    return this.firstName.set("Melissa ")
  }

  public updateArray() {
    this.array.update( (oldValue: Array<number>) => {
      console.log(oldValue)
      return [...oldValue, oldValue.length + 1]
     });
  }
}
