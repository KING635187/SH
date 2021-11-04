import styled from "styled-components";

const Container = styled.div`
    width: 1280px;
    margin: auto;

    @media (max-width: 1360px) {
        width: 992px;

    } 

    @media (max-width: 576px) {
        width: calc(100% - 16px * 2);   
    }
`;

export default Container;