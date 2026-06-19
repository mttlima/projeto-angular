import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone:true,
  imports: 
    [CommonModule, NgClass, NgStyle, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Matheus Lima";
  public age: number = 23;

  public sum() {
    this.age++;
  }

  public sub() {
    this.age--;
  }

  public condition = this.age > 18 ? "Adulto" : "Menor de idade";
  public isDisabled = true;
  public linkedin = "www.linkedin.com/in/mtlima"
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  constructor() {
    setTimeout(() => {
    }, 1000)
  }

  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseMove(event: MouseEvent) {
    return console.log ({
      clientX: event.clientX,
      clientY: event.clientY 
    })
  }

}
