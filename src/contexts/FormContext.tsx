//context, reducer, provider, hook
import { createContext } from 'react';
import { useFormReducer } from '../reducers/formReducer';
import { FormContextType, FormProviderProps } from '../types/formTypes';

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useFormReducer();
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
}