import { Action } from '@ngrx/store';
import { Wizard } from '../wizard.model';
import * as WizardActions from '../action/wizard.action';

const initialState: Wizard = {
  address: "fdsfdsfsdfsdf",
  numberOfitems: 10
}

export function reducer(state: Wizard = initialState, action: WizardActions.Actions) {
  switch (action.type) {
    case WizardActions.UPDATE_ADDRESS:
      return state;

    default:
      return state;
  }
}
