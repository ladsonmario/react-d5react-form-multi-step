import { useNavigate } from 'react-router-dom';
import * as C from './styled';
import { useForm } from '../../contexts/hooks/useForm'; 
import { FormActions } from '../../reducers/formReducer';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        state.name !== '' ? navigate('/step2') : alert('Preencha dos dados!');
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <C.Container>
            <p>Passo 1/4</p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo.</p>

            <hr/>

            <label htmlFor="name--input">Seu nome completo</label>
            <input 
                id="name--input"
                type="text"
                autoFocus
                value={state.name}
                onChange={handleNameChange}
            />

            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
    );
}