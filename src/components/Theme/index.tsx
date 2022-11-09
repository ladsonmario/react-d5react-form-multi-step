import * as C from './styled';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/hooks/useForm'; 

type Props = {
    children: React.ReactNode;
}
export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <div className="area">
                <Header />

                <div className="steps">
                    <div className="side--bar">
                        <SidebarItem 
                            title="Pessoal" 
                            description="Se identifique" 
                            icon="profile" 
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem 
                            title="Profissional" 
                            description="Seu nível" 
                            icon="book" 
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem 
                            title="Contatos" 
                            description="Como te achar" 
                            icon="mail" 
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </div>
                    <div className="page">{children}</div>
                </div>
            </div>
        </C.Container>
    );
}