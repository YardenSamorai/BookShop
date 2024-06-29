import React, { useEffect, useState } from 'react'
import OverViewBookList from './OverViewBookList'
import styled from 'styled-components'
import RecomendedSection from './RecomendedSection'
import FeaturedBooksSection from './FeaturedBooksSection'
import { ReactComponent as Line } from '../assets/icons/line1.svg'
import BestSelling from '../assets/images/sellingBook.png'
import BestSellingBookSection from './BestSellingBookSection'
import bookPicture from '../assets/images/headerBook2.png'
import Book1 from '../assets/images/FeaturedBook1.png'
import Book2 from '../assets/images/FeaturedBook2.png'
import Book3 from '../assets/images/FeaturedBook3.png'
import Book4 from '../assets/images/FeaturedBook4.png'
import Book5 from '../assets/images/FeaturedBook5.png'
import Book6 from '../assets/images/FeaturedBook12.png'
import Book7 from '../assets/images/FeaturedBook7.png'
import Book8 from '../assets/images/FeaturedBook10.png'
import Book9 from '../assets/images/FeaturedBook9.png'
import Book10 from '../assets/images/FeaturedBook11.png'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const bookListArray = [{
    title: "Simple Way Of Piece Life",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book1,
    catagory: "technology",
},
{
    title: "Great Travel At Desert",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book2,
    catagory: "business",
},
{
    title: "The Lady Beauty Scarlett",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book3,
    catagory: "romantic",
},
{
    title: "Once Upon A Time",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book4,
    catagory: "technology",
},
{
    title: "Portrait Photography",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book5,
    catagory: "technology",
},
{
    title: "Life Of Seacrits",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book6,
    catagory: "romantic",
},
{
    title: "Tips Of Simple Lifestyle",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book7,
    catagory: "adventure",
},
{
    title: "Fashion System",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book8,
    catagory: "fictional",
},
{
    title: "Way Of Happiness",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book9,
    catagory: "business",
},
{
    title: "Musical",
    auther: "Sanchit Howdy",
    price: "38.00$",
    img: Book10,
    catagory: "fictional",
},
]
// Removed duplicated categorys from bookListArray List


const HomePage = () => {
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
        <div>
            {/* Over View List books in main page */}
            <OverViewBookList />
            {/* Recomended section */}
            <RecomendedSection />

            {/*Featured Books Section */}
            <FeaturedBooksSection data={bookListArray}/>

            {/* Best Selling Book Section  */}
            <BestSellingBookSection />

            {/*Popular Books Section */}
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
                
        </div>
    )
}

export default HomePage

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