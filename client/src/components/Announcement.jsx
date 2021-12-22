import styled from 'styled-components'
import { yellowAprovet } from '../data';
import {mobile} from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: ${yellowAprovet};
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({ padding:"10px",textAlign:"center" })}
`;

const Announcement = () => {
    return (
        <Container>
            ¡Oferta especial! Envios gratis por compras mayores a $50
        </Container>
    )
}

export default Announcement
