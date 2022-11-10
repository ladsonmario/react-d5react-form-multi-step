import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;

        .info {
            flex: 1;
            margin-right: 20px;

            .title {
                text-align: right;
                font-weight: bold;
                margin-bottom: 7px;
                font-size: 15px;
                color: #fff;
            }

            .desc {
                text-align: right;                
                color: #b8b8d4;
                font-size: 13px;
            }
        }

        .icon--area {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: ${p => p.active ? '#25cd89' : '#ddd'};
            display: flex;
            justify-content: center;
            align-items: center;   
            
            img {
                width: 24px;
                height: 24px;
            }
        }

        .point {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 3px solid #494a7c;
            margin-left: 30px;
            margin-right: -6px;            
            background-color: ${p => p.active ? '#25cd89' : '#02044a'};
        }
    }

    @media(max-width: 600px) {
        a {
            flex-direction: column;
            
            .info {                
                margin: 0;
    
                .title {
                    text-align: center;                    
                }
    
                .desc {
                    text-align: center;                    
                }
            }

            .icon--area {
                margin-top: 7px;
            }

            .point {
                margin: 7px 0 0 0;
            }
        }
    }
`;