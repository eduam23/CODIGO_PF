import styled from "styled-components"
import { Facebook, Twitter, Instagram, Pinterest, LocationOn, Phone, Email } from "@material-ui/icons";
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.h1`
    display: flex;
`;

const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none" })}
`;

const Tittle = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;    
    padding:20px;
    ${mobile({ backgroundColor:"#fcf8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width:50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>APROVET</Logo>
                <Desc>Especialistas en Distribución de Productos Veterinarios
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="560023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Tittle>Enlaces útiles</Tittle>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>MSD</ListItem>
                    <ListItem>Alimentos</ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Mi Cuenta</ListItem>
                    <ListItem>Tracking</ListItem>
                    <ListItem>Canasta</ListItem>
                    <ListItem>Términos</ListItem>
                </List>
            </Center>
            <Right>
                <Tittle>Contacto</Tittle>
                <ContactItem><LocationOn style={{marginRight:"10px"}}/> Ca. Daniel Cruz 183 SURQUILLO</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> (+51) 449 0997 / (+51) 449 8700 / (+51) 449 0997 / 998 119 814</ContactItem>
                <ContactItem><Email style={{marginRight:"10px"}}/>ventas@aprovet.pe / aprovet@aprovet.pe</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
}

export default Footer
