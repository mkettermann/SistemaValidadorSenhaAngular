import { Component, computed, inject } from '@angular/core';
import { UiControls } from '../../services/ui/ui-controls';

// Fiz este componente de forma simples e auto-suficiente. Enquanto ele estiver na tela, de prefência no header, ele vai disponibilizar ao usuário, um controle da claridade do HSL (L = Lightness).
@Component({
  selector: 'app-control-dark-light',
  templateUrl: './control-dark-light.html',
  styleUrl: './control-dark-light.scss',
})
export class ControlDarkLight {
  // Injeta o serviço de controle de UI para acessar e modificar o estado do tema.
  private ui = inject(UiControls);

  // Este computed é só um facilitador, não é obrigatório.
  lightness = computed(() => { return this.ui.lightness(); });

  // Ciclo de início do Angular.
  ngOnInit(): void {
    // Aqui estou utilizando o Session Storage para lembrar por pouco tempo da última escolha.
    if (sessionStorage.getItem('theme') === 'dark') {
      document.querySelector("html")?.classList.add('dark-theme');
      this.ui.lightness.set('dark');
    } else {
      document.querySelector("html")?.classList.add('light-theme');
      this.ui.lightness.set('light');
    }
  }

  // Método principal para alterar a cor.
  setLightDark() {
    if (this.lightness() === 'light') {
      this.ui.lightness.set('dark');
      document.querySelector("html")?.classList.add('dark-theme');
      document.querySelector("html")?.classList.remove('light-theme');
      // Aqui estou utilizando o Session Storage para gravar por pouco tempo da última escolha.
      sessionStorage.setItem('theme', 'dark');
    } else {
      this.ui.lightness.set('light');
      document.querySelector("html")?.classList.add('light-theme');
      document.querySelector("html")?.classList.remove('dark-theme');
      // Aqui estou utilizando o Session Storage para gravar por pouco tempo da última escolha.
      sessionStorage.setItem('theme', 'light');
    }
  }
}
