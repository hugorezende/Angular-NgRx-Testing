import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
import { Wizard } from '../wizard.model';

export const ADD_ADDRESS = '[ADDRESS] Add';
export const UPDATE_ADDRESS = '[ADDRESS] Update';

export class AddAddress implements Action{
    readonly type = ADD_ADDRESS;
    constructor(public payload: string) {}
}

export class UpdateAddress implements Action{
    readonly type = UPDATE_ADDRESS;
    constructor(public payload: Wizard) {}
}

export type Actions = AddAddress | UpdateAddress;