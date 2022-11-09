import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    align-items: center;
    border: 2px solid ${p => p.selected ? '#25cd89' : '#16195c'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
    }

    .icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #191a59;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
    }

    .info {
        flex: 1;
        margin-left: 20px;

        .title {
            font-size: 17px;
            font-weight: bold;
            margin-bottom: 7px;
        }

        .desc {
            font-size: 14px;
            color: #b8b8d4;
        }
    }
`;