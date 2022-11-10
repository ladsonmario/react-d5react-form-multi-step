import { useNavigate, Link } from 'react-router-dom';
import * as C from './styled';
import { useForm } from '../../contexts/hooks/useForm'; 
import { FormActions, InitialDate } from '../../reducers/formReducer';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '' || state.email === '' || state.github === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.github !== '') {
            console.log(state);            
            alert('Cadastro feito com sucesso!');   
            dispatch({
                type: FormActions.setReset,
                payload: InitialDate
            });         
            navigate('/');
        }
    }

    return (
        <C.Container>
            <p>Passo 4/4</p>
            <h1>Pronto {state.name}, veja seus dados.</h1>
            <p>Agora verifique se todos os seus dados estão corretos e confirme!</p>

            <hr/>

            <div className="info--area">
                <div className="field--name">Nome</div>
                <div className="field--content">{state.name}</div>
            </div>
            <div className="info--area">
                <div className="field--name">Nível Profissional</div>
                <SelectOption 
                    title={state.level === 0 ? 'Sou iniciante' : 'Sou programador'} 
                    description={state.level === 0 ? 'Comecei a programar a menos de 2 anos' : 'já programo há 2 anos ou mais'}
                    icon={state.level === 0 ? '🥳' : '🤓'}
                />
            </div> 
            <div className="info--area">
                <div className="field--name">E-mail</div>
                <div className="field--content">{state.email}</div>
            </div>
            <div className="info--area">
                <div className="field--name">GitHub</div>
                <div className="field--content">{state.github}</div>
            </div>           

            <div className="buttons">
                <Link to="/step3">Voltar</Link>
                <button onClick={handleNextStep}>Cadastrar</button>    
            </div>
        </C.Container>
    );
}