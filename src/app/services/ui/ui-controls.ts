import { Injectable, signal } from '@angular/core';
import { IThemeLightness } from './ui.types';
import { ENV } from '../../../env/env';

@Injectable({ providedIn: 'root' })
export class UiControls {

  // Inicializa o nível de debug com o valor definido no ambiente.
  static currentDebugLevel = signal<number>(ENV.debugLevel ?? 0);

  // Inicializa o tema claro.
  lightness = signal<IThemeLightness>('light');

  // Inicializa a tonalidade do tema com um valor padrão.
  hue = signal<number>(260);

}

// A fim de evitar dependência circular, vou deixar o LOG aqui.
export const LOG = (level: number, ...attr: any[]) => {
  if (UiControls.currentDebugLevel() >= level) {
    return console.log(...attr);
  }
}
