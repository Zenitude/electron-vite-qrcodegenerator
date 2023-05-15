import styled from "styled-components";

export const AppContainer = styled.main`
    display: flex;
    flex-direction: column;
    max-height: 625px;
    
    .codes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        padding-top: 50px;
        padding-bottom: 75px;
    }

    svg, canvas {
        box-shadow: inset 0 0 5px #000, 0 0 10px #000;
        padding: 5px;
        border-radius: 10px;
        background: #fff;
    }
`;