import { FormActions } from '../reducers/formReducer';

export type InitialDateType = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

export type ActionReducerType = {
    type: FormActions;
    payload: any;
}

export type FormContextType = {
    state: InitialDateType;
    dispatch: (action: ActionReducerType) => void;
}

export type FormProviderProps = {
    children: React.ReactNode;
}