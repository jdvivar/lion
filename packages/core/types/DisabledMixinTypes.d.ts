import { Constructor } from '@open-wc/dedupe-mixin';
import { LitElement } from 'lit-element';

export declare class DisabledHost {
  static get properties(): {
    disabled: {
      type: BooleanConstructor;
      reflect: boolean;
    };
  };
  disabled: boolean;

  /**
   * Makes request to make the element disabled
   */
  public makeRequestToBeDisabled(): void;

  /**
   * Retract request to make the element disabled and restore disabled to previous
   */
  public retractRequestToBeDisabled(): void;

  private __internalSetDisabled(value: boolean): void;
}

export declare function DisabledMixinImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T & Constructor<DisabledHost>;

export type DisabledMixin = typeof DisabledMixinImplementation;
