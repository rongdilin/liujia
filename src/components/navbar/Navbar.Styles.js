import styled from "styled-components";
import { Radio } from "antd";

export const Header = styled.div`
    font-size: 1.5em;
    color: white;
    margin: 20px 10px;
    @media (max-width: 800px) {
        font-size: 1em;
    }
`;

export const RadioButton = styled(Radio.Button)`
    background: rgb(38, 38, 38);
    color: rgb(255, 255, 255);
    text-align: center;

    @media (max-width: 800px) {
        width: 50px;
        height: auto;
        font-size: 0.5em;
        padding: 0;
        line-height: 15px;
    }
`;

export const lanHeader = styled.div`

`;