import { GenericModel } from './GenericModel';

export interface ColorI {
  default: string;
  contrast: string;
  rgb?: string;
  contrast_rgb: string;
  shade?: string;
  tint?: string;
}

export class Theme extends GenericModel {

  primary: ColorI = null;
  secondary: ColorI = null;
  tertiary: ColorI = null;
  cuaternary: ColorI = null;
  details: ColorI = null;

  constructor(data?: any) {
    super();
    this.constructorParse(data);
  }

  export() {
    const toReturn = super.export();
    Object.values(toReturn).forEach((e: ColorI) => {
      e[''] = e.default;
      if (e.contrast_rgb) {
        e['contrast-rgb'] = e.contrast_rgb;
      }
      delete (e.default);
      delete (e.contrast_rgb);
    });
    console.log(toReturn);
    return toReturn;
  }
}
