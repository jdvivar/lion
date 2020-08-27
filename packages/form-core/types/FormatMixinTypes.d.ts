import { Constructor } from '@open-wc/dedupe-mixin';
import { LitElement } from '@lion/core';
import { ValidateHost } from './validate/ValidateMixinTypes';
import { FormControlHost } from './FormControlMixinTypes';

export declare interface FormatOptions {
  locale?: string;
  decimalSeparator?: string;
}

export declare class FormatHost {
  static properties: {
    formattedValue: { attribute: false };
    serializedValue: { attribute: false };
    formatOn: { attribute: false };
    formatOptions: { attribute: false };
  };

  formattedValue: string;
  serializedValue: string;
  formatOn: string;
  formatOptions: FormatOptions;
  value: string;
  __preventRecursiveTrigger: boolean;
  __isHandlingUserInput: boolean;

  parser(v: string, opts: FormatOptions): unknown;
  formatter(v: unknown, opts: FormatOptions): string;
  serializer(v: unknown): string;
  deserializer(v: string): unknown;

  _calculateValues(opts: { source: 'model' | 'serialized' | 'formatted' | null }): void;
  __callParser(value: string | undefined): object;
  __callFormatter(): string;
  _onModelValueChanged(arg: { modelValue: unknown }): void;
  _dispatchModelValueChangedEvent(): void;
  _syncValueUpwards(): void;
  _reflectBackFormattedValueToUser(): void;
  _reflectBackFormattedValueDebounced(): void;
  _reflectBackOn(): boolean;
  _proxyInputEvent(): void;
  _onUserInputChanged(): void;

  connectedCallback(): void;
  disconnectedCallback(): void;
}

export declare function FormatImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T &
  Constructor<FormatHost> &
  FormatHost &
  Constructor<ValidateHost> &
  typeof ValidateHost &
  Constructor<FormControlHost> &
  typeof FormControlHost;

export type FormatMixin = typeof FormatImplementation;
