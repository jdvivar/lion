import { Constructor } from '@open-wc/dedupe-mixin';
import { FormControlsCollection } from '../../src/registration/FormControlsCollection';
import { FormRegisteringHost } from '../../types/registration/FormRegisteringMixinTypes';

export declare class ElementWithParentFormGroup {
  __parentFormGroup: FormRegistrarHost;
}

export declare class FormRegistrarHost {
  static get properties(): {
    _isFormOrFieldset: {
      type: BooleanConstructor;
      reflect: boolean;
    };
  };
  _isFormOrFieldset: boolean;
  formElements: FormControlsCollection;
  addFormElement(child: HTMLElement & ElementWithParentFormGroup, indexToInsertAt: number): void;
  removeFormElement(child: FormRegisteringHost): void;
  _onRequestToAddFormElement(e: CustomEvent): void;
}

export declare function FormRegistrarImplementation<T extends Constructor<HTMLElement>>(
  superclass: T,
): T &
  Constructor<FormRegistrarHost> &
  FormRegistrarHost &
  Constructor<FormRegisteringHost> &
  typeof FormRegisteringHost;

export type FormRegistrarMixin = typeof FormRegistrarImplementation;
