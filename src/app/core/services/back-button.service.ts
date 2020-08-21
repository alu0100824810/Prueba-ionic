import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  // Custom action for hardware backButton
  // tslint:disable-next-line:variable-name
  private _handler: () => void;
  constructor() { }

  /**
   * Add new custom handler
   * @param func handler to add
   */
  add(func: () => void) {
    this._handler = func;
  }

  /**
   * Remove handler
   */
  remove() {
    this._handler = undefined;
  }

  /**
   * Determines if custom handler is defined
   */
  isDefine(): boolean {
    return this._handler !== undefined;
  }

  /**
   * getter
   */
  get handler(): () => void {
    return this._handler;
  }
}
