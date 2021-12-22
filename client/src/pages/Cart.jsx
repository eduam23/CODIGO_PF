import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {mobile} from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { logoImg } from '../data';
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding:20px;
    ${mobile({ padding:"10px"})}
`;

const Tittle = styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight:600;
    cursor:pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display:"none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})}
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})}
`;

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;

const Image = styled.img`
    width:200px;
`;

const Details = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;

const PriceDetail = styled.span`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({ margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
    ${mobile({ marginBottom:"20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`;

const SummaryTitle = styled.h1`
    
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type ==="total"&&"500"};
    font-size: ${props=> props.type ==="total"&&"24px"};
`;

const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;

const Button = styled.button`
    width:100%;
    padding:10px;
    background-color: black;
    color:white;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [stripeToken,setStripeToken] = useState(null);   
    const history = useHistory()

    const onToken = (token)=>{
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async ()=>{
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/success", {data:res.data})
            }catch{

            }
        };
        stripeToken && makeRequest();
    }, [stripeToken,cart.total,history])

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Tittle>
                    Tú Bolsa    
                </Tittle>
                <Top>
                    <TopButton>Seguir comprando</TopButton>
                    <TopTexts>
                        <TopText>Bolsa de compra ({cart.quantity})</TopText>
                        <TopText>Tu lista</TopText>
                    </TopTexts>
                    <TopButton type="filled">Finalizar compra</TopButton>
                </Top>
                <Bottom>
                    <Info>
                    <Hr/>
                        {cart.products.map(product=>(
                        <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {product._id}</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr/>

                    </Info>
                    <Summary>
                        <SummaryTitle>Resumen del Pedido</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Recargo de envío</SummaryItemText>
                            <SummaryItemPrice>$. 4.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Descuento de envio</SummaryItemText>
                            <SummaryItemPrice>$. -4.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="APROVET"
                            image={logoImg}
                            billingAddress
                            shippingAddress
                            description={`Tu monto final es $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>Finalizar Compra</Button>
                        </StripeCheckout>

                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
