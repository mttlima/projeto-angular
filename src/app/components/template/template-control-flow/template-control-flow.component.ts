import { AsyncPipe, CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, NgIf,
    AsyncPipe, NgFor,
    NgSwitch, NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {

  public isTrue = false;

  public itens: Array<{ name:string }> = []
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000))

  public switchCondition = 'A';

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value});
  }

  public removeName(value: string) {
    return this.itens.pop();
  }

}
