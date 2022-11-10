import styled from 'styled-components';

export const Container = styled.div`
    background-color: #02044a;
    color: #fff;
    min-height: 100vh;

    .area {
        margin: auto;
        max-width: 980px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        .steps {
            flex: 1;
            display: flex;

            .side--bar {
                width: 250px;
                border-right: 1px solid #16195c;
            }

            .page {
                flex: 1;
                padding: 40px 0 0 40px;
            }
        }
    }

    @media(max-width: 600px) {
        .area {
            .steps {

                .side--bar {
                    width: auto;
                    padding: 0 5px;
                }

                .page {
                    padding: 40px 10px 0 10px;
                }
            }
        }        
    }
`;