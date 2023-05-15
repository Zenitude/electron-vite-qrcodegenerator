import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NetworksContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const NetworkLink = styled(Link)`
    width: 60px;
    height: 60px;
    border-radius: 15px;
    overflow: hidden;
    filter: drop-shadow(0 0 1px #fff);
`;

export const NetworkImage = styled.img`
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 1px #fff);
`;