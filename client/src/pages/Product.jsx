import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { popularProducts, yellowAprovet } from "../data";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import {mobile} from "../responsive"
import { useDispatch } from "react-redux";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display:flex;
    ${mobile({ flexDirection:"column", padding:"10px"})}
`;

const ImgContainer = styled.div`
    flex:1;

`;

const Image = styled.img`
    width:100%;
    height: 70vh;
    object-fit:contain;
    ${mobile({ height:"40vh"})}
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    align-items:left;
    justify-content: center;
    ${mobile({ padding:"10px"})}
`;

const Tittle = styled.h1`
    font-weight:200;
`;

const Desc = styled.p`
    margin 20px 0px;
`;

const Price = styled.span`
    font-weight:100;
    font-size:30px;
`;

const FilterSize = styled.select`
    margin-left:10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    ${mobile({ width:"100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid ${yellowAprovet};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 10px;
    border: 1px solid ${yellowAprovet};
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
       background-color: #f8f4f4; 
    }
`;


const Product = () => {

    const location =  useLocation();
    const id = location.pathname.split("/")[2];

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data);
            }catch{

            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) =>{
        if (type === "dec") {
            quantity>1 && setQuantity(quantity - 1);
        }else{
            setQuantity(quantity + 1);
        }
    };

    const handleCLick = ()=>{
        dispatch(addProduct({...product, quantity}));
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Tittle>{product.title}</Tittle>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleCLick}>Añadir al Carrito</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
