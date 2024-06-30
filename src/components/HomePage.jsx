import React, { useEffect, useState } from 'react'
import OverViewBookList from './OverViewBookList'
import styled from 'styled-components'
import RecomendedSection from './RecomendedSection'
import FeaturedBooksSection from './FeaturedBooksSection'
import BestSellingBookSection from './BestSellingBookSection'
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
import { ReactComponent as Line } from '../assets/icons/line1.svg'
import ArticleImage1 from '../assets/images/ArticleImage1.png'
import ArticleImage2 from '../assets/images/ArticleImage2.png'
import ArticleImage3 from '../assets/images/ArticleImage3.png'
import PopularBooksSection from './PopularBooksSection'
import QuoteSectionPage from './QuoteSectionPage'
import LatestArticleSection from './LatestArticleSection'





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

const LatestArticleArray = [{
    img: ArticleImage1,
    date: "2 Aug, 2021",
    title: "Reading Books Always Makes The Moments Happy",

},
{
    img: ArticleImage2,
    date: "2 Aug, 2021",
    title: "Reading Books Always Makes The Moments Happy",

},
{
    img: ArticleImage3,
    date: "2 Aug, 2021",
    title: "Reading Books Always Makes The Moments Happy",

},
];


const HomePage = () => {

    return (
        <div>
            {/* Over View List books in main page */}
            <OverViewBookList />
            {/* Recomended section */}
            <RecomendedSection />

            {/*Featured Books Section */}
            <FeaturedBooksSection data={bookListArray} />

            {/* Best Selling Book Section  */}
            <BestSellingBookSection />

            {/*Popular Books Section */}
            <PopularBooksSection data={bookListArray} />

            {/*Quote Section */}
            <QuoteSectionPage />

            {/* Latest Articles Section */}
            <LatestArticleSection data={LatestArticleArray}/>
        </div>
    )
}

export default HomePage
