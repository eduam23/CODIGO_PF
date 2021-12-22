
import styled from 'styled-components'
import { yellowAprovet } from '../data';
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255,255,255,0.5),
            rgba(255,255,255,0.5)
    ),
    
    url("https://img.besthqwallpapers.com/Uploads/21-5-2018/53362/rhodesian-ridgebacks-4k-sad-dog-pets-wheat-field.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width:"75%" })}
`;

const Form = styled.form`
        display: flex;
        flex-wrap:wrap;
`;

const Tittle = styled.h1`
        font-size:24px;
        font-weight: 300;
`;

const Input = styled.input`
        flex:1;
        min-width:40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`;

const Agreement = styled.span`
        font-size:12px;
        margin: 20px 0px;
`;

const Button = styled.button`
        width:40%;
        border: none;
        padding: 15px 20px;
        background-color: ${yellowAprovet};
        color: white;
        cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Tittle>
                    Crea una cuenta
                </Tittle>
                <Form>
                    <Input placeholder="nombre"/>
                    <Input placeholder="apellido"/>
                    <Input placeholder="usuario"/>
                    <Input placeholder="email"/>
                    <Input placeholder="contraseña"/>
                    <Input placeholder="confirmar contraseña"/>
                    <Agreement>
                    Al crear una cuenta, doy mi consentimiento para el tratamiento de mis datos personales de acuerdo con mi <b>Política de Privacidad</b>.
                    </Agreement>
                    <Button>Crear</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
