import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Line } from '../assets/icons/line1.svg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const PopularBooksSection = (props) => {
    let bookListArray = props.data
    const [tabIndex, setTabIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState("all");
    //propes Array with out duplicetad Catagories.
    //Empty Array to set the categories too.
    const [categories, setCategories] = useState([]);
    useEffect(() => {
       const a = bookListArray.map((item) => {
            return item.catagory
        })
        let b = Array.from(new Set(a));
        setCategories(["all", ...b ]);
    },[])

    const ClickTabHandler = (e, newValue) => {
        setTabIndex(newValue);
        setCurrentCategory(categories[newValue]);
    }


  return (
    <WrapperPopularSection>
    <SubTitlePopularSection>
        <div>SOME QUALITY ITEMS</div>
    </SubTitlePopularSection>
    <div>
        <PopularBooksTitle>
        <DashLine />
            <nobr>Popular Books</nobr>
        <DashLine />
        </PopularBooksTitle>
        <Line />
    </div>
    <Tabs style={{marginTop:"2rem" ,color:"#D45B30"}} value={tabIndex} onChange={ClickTabHandler} textColor='inherit'  indicatorColor="secondery" centered>
        {
        categories.map((item,index) => {
            return (
                <Tab value={index} label={item} style={{fontSize:"1.2rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight:"bold"}}/>
                
            )
        })}
    </Tabs>
        <PopularBooksItemList>
    {bookListArray.filter((item) => {
        return (item.catagory === currentCategory || currentCategory === "all");
    }).map((item) => { 
        return (
        <div>
            <div>
                <img src={item.img} />
            </div>
            <PopulerBookTitle>
                {item.title}
            </PopulerBookTitle>
            <PopulerBookAuther>
                {item.auther}
            </PopulerBookAuther>
            <BookItemPrice>
                {item.price}
            </BookItemPrice>
        </div>
        )
    })}
    </PopularBooksItemList>
</WrapperPopularSection>
  )
}

export default PopularBooksSection

const WrapperPopularSection = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5rem;
    font-family: "Plus Jakarta Sans", sans-serif;
`;
const SubTitlePopularSection = styled.div`
    color:#B1AFAD;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const DashLine = styled.div`
width: 35%;
border: solid 1px #EDEBE7;
margin-left: 2rem;
margin-right: 2rem;
`;


const PopularBooksTitle = styled.div`
display: flex;
justify-content: space-between;
font-family: "Prata", serif !important;
font-size: 4.5rem;
align-items: center;
margin-bottom: 1.5rem;
`;

const Item = styled.div`
font-size: 1.2rem;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform: uppercase;

&:active{
    text-decoration: underline;
    color:#D45B30;
}
`;

const Listitems = styled.div`
display: flex;
justify-content: center;
gap: 4rem;
margin-top: 3rem;

`;

const PopularBooksItemList = styled.div`
display: flex;
flex-wrap: wrap;
`;

const PopulerBookTitle = styled.div`
font-family: "Prata", serif !important;
font-size: 1.4rem;
width: 100%;
text-align: center;
`;

const PopulerBookAuther = styled.div`
color:#B1AFAD;
text-align: center;
margin: .8rem 0;
font-family: "Plus Jakarta Sans", sans-serif;
font-weight: bold;
`;

const BookItemPrice = styled.div`
font-family: "Plus Jakarta Sans", sans-serif;
color:#D45B30;
font-size: 1rem;
font-weight: bold;
text-align: center;
`;