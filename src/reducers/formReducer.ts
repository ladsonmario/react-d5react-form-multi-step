import { useReducer } from 'react';
import { ActionReducerType, InitialDateType } from '../types/formTypes';

export const InitialDate: InitialDateType = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const formReducer = (state: InitialDateType, action: ActionReducerType) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setGithub:
            return { ...state, github: action.payload };
        default:
            return state;
    }
}

export const useFormReducer = () => {
    return useReducer(formReducer, InitialDate);
}