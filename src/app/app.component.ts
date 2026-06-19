import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { DscHeaderComponent } from 'sidsc-components/dsc-header';
import { DscButtonHeaderComponent } from 'sidsc-components/dsc-button-header';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
    [CommonModule, RouterOutlet, NewComponent,
    TemplateBindingComponent, DscHeaderComponent,
    DscButtonHeaderComponent, TemplateVariablesComponent],
  styles: [
    `
    h1 {
      color: blue;
    }
    `
  ],
  template: `
  <!-- <router-outlet></router-outlet> -->
   <dsc-header toggleButton="true" [acronym] = '"Meu projeto Angular"' 
   accessModifier='externo' toggleButtonLabel="true"
   additionalInfo="Olá", userName="Matheus Lima"
   userWorkUnit="Desenvolvedor Front End" >
    <dsc-button-header icon="person" iconStyle="rounded"
    label="perfil" href="/perfil">
    </dsc-button-header>
  </dsc-header>


  <h1>Curso de Angular</h1>
  <hr/>
  <br/>


  <app-template-binding/>
  <!-- <div class="theme-dark">
    <app-new-component/>
  </div> -->

  <app-template-variables/>
  `,
})
export class AppComponent {
  title = 'Curso de Angular';
}

//<router-outlet/>

