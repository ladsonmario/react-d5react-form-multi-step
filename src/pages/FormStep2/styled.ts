import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 13px;
        color: #b8b8d4;
    }

    h1 {
        font-size: 26px;
        margin: 30px 0;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
    }

    input {
        margin-top: 10px;
        padding: 20px 10px;
        border: 2px solid #25cd89;
        border-radius: 10px;
        color: #fff;
        outline: 0;
        font-size: 15px;
        background-color: #02044a;
    }

    

    .buttons {
        display: flex;
        gap: 20px;

        button, a {                   
            margin-top: 30px;
            background-color: #25cd89;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 40px;
            border: 0;
            border-radius: 30px;
            cursor: pointer;
            width: 150px;
            text-align: center;
        }

        a {
            font-size: 16px;
            color: #b8b8d4;
            background: none;
        }
    }

    @media(max-width: 600px) {
        .buttons {
            flex-direction: column-reverse;
        }
    }
`;