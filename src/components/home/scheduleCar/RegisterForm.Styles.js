import styled from "styled-components";
import { Card, Form } from "antd";

const Grid = Card.Grid;

export const CarCardGrid = styled(Grid)`
    width: 50%;
`;

export const FormTitle = styled.div`
    text-align: center;
    font-size: 2em;
`;

export const ScheduleCarForm = styled(Form)`
    background: rgba(0, 0, 0, 0.7);
    padding: 20px 30px 30px 30px;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
`;