import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height:"50px" })}
    }
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding:"10px 0px" })}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Lenguage = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none" })}
`;

const Input = styled.input`
    border: none;
    ${mobile({ width:"50px" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;


const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize:"20px" })}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2, justifyContent:"center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize:"10px", marginLeft: "10px"})}
`;


const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Lenguage>ES</Lenguage>
                    <SearchContainer>
                        <Input placeholder="Buscar"/>
                        <Search style={{ color: 'gray', fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Center><Logo>APROVET</Logo></Center>
                </Link>
                <Right>
                    <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <MenuItem>Registro</MenuItem>
                    </Link>
                    
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <MenuItem>Iniciar Sesión</MenuItem>
                    </Link>
                    
                    <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                        </MenuItem>
                    </Link>
                    
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
