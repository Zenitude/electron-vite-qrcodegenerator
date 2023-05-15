import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    position: absolute;

    .activeChevron {
        transform: rotate(180deg);
    }

    .fgColor {
        top: 220px;
        left: 0px;
        border-radius: 0 15px 15px 0;

        button {
            border-radius: 0 15px 15px 0;
        }
    }

    .bgColor {
        top : 220px;
        right: 0px;
        border-radius: 15px 0 0 15px;

        button {
            border-radius: 15px 0 0 15px;
        }
    }

    /* QRCode  */
    .link {
        top: 70px;
        left: 0px;
        border-radius: 0 15px 15px 0;

        button {
            border-radius: 0 15px 15px 0;
        }
    }

    .level {
        top: 70px;
        right: 0px;
        border-radius: 15px 0 0 15px;

        button {
            border-radius: 15px 0 0 15px;
        }
    }

    .src {
        top: 80px;
        right: 0px;
        border-radius: 15px 0 0 15px;

        button {
            border-radius: 15px 0 0 15px;
        }
    }
`;

export const Container = styled.div`
    position: absolute;
    display: flex;
    box-shadow: 0 0 15px #000;
    max-width: 320px;

    label, input, select {
        width: 100%;
        max-width: 280px;
        min-width: 200px;
        height: 50px;
        padding: 5px 15px;
        border: none;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        overflow: hidden;
    }

    button {
        width: 50px;
        height: 50px;
        border: none;
        overflow: hidden;
        background-color: rgba(255,255,255,0.5);
        
        svg {
            width: 100%;
            height: 100%;
            border-radius: initial;
            border: none;
            box-shadow: none;
            background: transparent;
        }
    }
`;