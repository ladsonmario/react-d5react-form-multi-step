import { Link } from 'react-router-dom';
import * as C from './styled';
import ProfileIcon from '../../svgs/profile.svg';
import BookIcon from '../../svgs/book.svg';
import MailIcon from '../../svgs/mail.svg';
import OkIcon from '../../svgs/ok.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container active={active}>
            <Link to={path}>
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="desc">{description}</div>
                </div>
                <div className="icon--area">   
                    {icon === 'profile' &&
                        <img src={ProfileIcon} alt="" />
                    }                                   
                    {icon === 'book' &&
                        <img src={BookIcon} alt="" />
                    }                      
                    {icon === 'mail' &&
                        <img src={MailIcon} alt="" />
                    }     
                    {icon === 'ok' &&
                        <img src={OkIcon} alt="" />
                    }               
                </div>
                <div className="point"></div>
            </Link>
        </C.Container>
    );
}