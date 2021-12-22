import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {mobile} from "../responsive"
import {
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`

`;

const Tittle = styled.h1`
    margin:20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width:"0px 20px", display:"flex", flexDirection:"column"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight:"0px"})}
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({ margin:"10px 0px"})}
`;

const Option = styled.option`
    
`;

const ProductList = () => {
    const location =  useLocation()
     const cat = location.pathname.split("/")[2];
     const [filters, setFilters] = useState({});
     const [sort, setSort] = useState("promoción");

     const handleFilters = (e) =>{
        const value =e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
     };
     console.log(filters)
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Tittle>{cat}</Tittle>
            <FilterContainer>
                <Filter>
                    <FilterText>Productos encontrados:</FilterText>
                    <Select name ="tipo" onChange={handleFilters}>
                    <Option disabled >
                        Tipo
                    </Option>
                    <Option >vacuna canina</Option>
                    <Option >vacuna felina</Option>
                    <Option >medicamento</Option>
                </Select>
                </Filter>
                <Filter>
                    <FilterText>Productos ordenados:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                    <Option value ="nuevo">
                        Nuevo
                    </Option>
                    <Option value ="asc">Precio (asc)</Option>
                    <Option value ="desc">Precio (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
