import { useNavigate, Link } from 'react-router-dom';
import * as C from './styled';
import { useForm } from '../../contexts/hooks/useForm'; 
import { FormActions } from '../../reducers/formReducer';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            navigate('/step4');
        } else {
            alert('Preencha os dados!');
        }
    }  

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <C.Container>
            <p>Passo 3/4</p>
            <h1>Legal {state.name}, onde te achamos?</h1>
            <p>Preencha essses dados para entrarmos em contato!</p>

            <hr/>

            <label htmlFor="email--input">Qual seu e-mail?</label>
            <input 
                id="email--input"
                type="email"
                autoFocus
                value={state.email}
                onChange={handleEmailChange}
            />

            <label htmlFor="github--input">Qual seu GitHub?</label>
            <input 
                id="github--input"
                type="url"                
                value={state.github}
                onChange={handleGithubChange}
            />
            

            <div className="buttons">
                <Link to="/step2">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>  
            </div>
        </C.Container>
    );
}