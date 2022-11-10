import { useNavigate } from 'react-router-dom';
import * as C from './styled';
import { useForm } from '../../contexts/hooks/useForm'; 
import { FormActions } from '../../reducers/formReducer';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }        
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') navigate('/step3');
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <C.Container>
            <p>Passo 2/4</p>
            <h1>{state.name}, o que melhor descreve você?</h1>
            <p>Escreva a opção que melhor condiz com seu estado atual, profissionalmente!</p>

            <hr/>

            <SelectOption 
                title="Sou iniciante"
                description="Comecei a programar a menos de 2 anos"
                icon="🥳"
                selected={state.level === 0}
                onClick={() => setLevel(0)}
            />
            
            <SelectOption 
                title="Sou programador"
                description="já programo há 2 anos ou mais"
                icon="🤓"
                selected={state.level === 1}
                onClick={() => setLevel(1)}
            />
            
            <div className="buttons">
                <Link to="/">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>    
            </div>            
        </C.Container>
    );
}