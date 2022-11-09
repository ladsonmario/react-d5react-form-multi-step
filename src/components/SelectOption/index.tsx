import * as C from './styled';

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}
export const SelectOption = ({ title, description, icon, selected, onClick }: Props) => {
    const handleClick = () => onClick();

    return (
        <C.Container selected={selected} onClick={handleClick}>
            <div className="icon">{icon}</div>
            <div className="info">
                <div className="title">{title}</div>
                <div className="desc">{description}</div>
            </div>
        </C.Container>
    );
}