import { Injectable } from '@angular/core';
import { Theme } from '@core/models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private root: HTMLElement;

  actualTheme: Theme;

  constructor() {
    // FIXME: Eliminar tema predeterminado
    this.actualTheme = new Theme({
      primary: {
        // default: '#1a1a1a',
        default: '#072357',
        contrast: '#ffffff'
      },
      secondary: {
        default: '#219FD0',
        contrast: '#ffffff'
      },
      tertiary: {
        default: '#e6e6e6',
        contrast: '#000000'
      },
      cuaternary: {
        default: '#e6e6e6',
        contrast: '#000000'
      },
      details: {
        default: '#9a1419',
        contrast: '#ffffff'
      }
    });
  }

  updateTheme() {
    if (!this.root) {
      this.root = document.documentElement;
    }
    Object.entries(this.actualTheme.export()).forEach(entry => {
      Object.entries(entry[1]).forEach(e => {
        const name = `--ion-color-${entry[0]}${e[0] ? '-' : ''}${e[0]}`;
        this.root.style.setProperty(name, e[1] as string);
        /* this.root.style.setProperty(`--brand-${entry[0]}-${e}`, e[1] as string); */
      });
    });
  }
}
