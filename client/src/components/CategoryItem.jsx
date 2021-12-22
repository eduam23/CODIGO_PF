import { Link } from "react-router-dom";
import styled from "styled-components"
import { yellowAprovet } from '../data';
import {mobile} from "../responsive"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height:"25vh" })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    // padding:0px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

const Tittle = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-shadow: 4px 2px 4px rgba(0,0,0,0.91);
    text-align: center;
`;

const Button = styled.button`
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Tittle>{item.tittle}</Tittle>
                <Button>Comprar</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
