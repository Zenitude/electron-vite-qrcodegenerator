import styled from "styled-components";

export const ContainerQrCode = styled.div`
    position: relative;

    button {
        z-index: 10;
        cursor: pointer;
        position: absolute;
        bottom: -50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border: none;

        &:first-of-type {
            left: 0;
        }

        &:last-of-type {
            right: 0;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    }
`;