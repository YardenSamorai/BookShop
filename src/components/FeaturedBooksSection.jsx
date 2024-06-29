
import React, { useState,useEffect } from 'react'
import OverViewBookList from './OverViewBookList'
import styled from 'styled-components'
import { ReactComponent as Line } from '../assets/icons/line1.svg'
import { ReactComponent as ArrowNext } from '../assets/icons/arrow_next.svg'
import { ReactComponent as ArrowBack } from '../assets/icons/arrow_back.svg'


const FeaturedBooksSection = (props) => {

const [bookListArray,setBookListArray] = useState ([{}])
    useEffect(()=> {
        if(props.data){
            setBookListArray(props.data);
        }
    }, [props.data])

    const [startIndex, setStartIndex] = useState(0);
    const booksToShow = 4;

    return (
        <div>
            {/*Featured Books Section */}
            <WrapperFeaturedBooks>
                <DashLine />
                <FeaturedBooksTitle>Featured Books</FeaturedBooksTitle>
                <DashLine />
            </WrapperFeaturedBooks>
            <FeaturedBookLine>
                <Line />
            </FeaturedBookLine>

            {/* Book List */}
            <WrapperFeaturedBookList>
                <WrapperArrowBack>
                    <IconArrowBackStyled onClick={() => {
                        if (startIndex === 0) {
                            setStartIndex(bookListArray.length - 1);
                        }
                        else {
                            setStartIndex(startIndex - 1);
                        }
                    }} />
                </WrapperArrowBack>
                <BooksList>
                    {(startIndex + booksToShow <= bookListArray.length
                        ? bookListArray.slice(startIndex, startIndex + booksToShow)
                        : bookListArray.slice(startIndex, bookListArray.length).concat(bookListArray.slice(0, (startIndex + booksToShow) % bookListArray.length))
                    ).map((book, index) => {
                        return (
                            <div style={{ flex: "0 0 25%", textAlign: "center" }}>
                                <img src={book.img} />
                                <BookItemTitle>{book.title}</BookItemTitle>
                                <BookItemAuther>{book.auther}</BookItemAuther>
                                <BookItemPrice>{book.price}</BookItemPrice>
                            </div>
                        )
                    })}
                </BooksList>
                <WrapperArrowBack>
                    <IconArrowNextStyled onClick={() => {
                        if (startIndex + 1 === bookListArray.length) {
                            setStartIndex(0);
                        }
                        else {
                            setStartIndex(startIndex + 1);
                        }
                    }} />
                </WrapperArrowBack>

            </WrapperFeaturedBookList>
            <WarpperDotDivs>
                <div>. . . . . </div>
            </WarpperDotDivs>
        </div>
    )
}

export default FeaturedBooksSection

const WrapperFeaturedBooks = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5rem ;
`;
const DashLine = styled.div`
width: 100%;
height: 0;
border: solid 1px #EDEBE7;
margin-left: 2rem;
margin-right: 2rem;
`;
const FeaturedBooksTitle = styled.div`
font-family: "Prata", serif !important;
font-size: 4.5rem;
width: 100%;
text-align: center;
`;
const FeaturedBookLine = styled.div`
display: flex;
align-items:center ;
justify-content: center;
position: center;
margin-top: 3rem;
`;
const BooksList = styled.div`
display: flex;
flex-direction:row ;
margin-top: 1.5rem;
width: 100%;
`;
const BookItemTitle = styled.div`
display: flex;
font-size: 1.5rem;
justify-content: center;
font-family: "Prata", serif !important;
`;
const BookItemAuther = styled.div`
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
const WrapperFeaturedBookList = styled.div`
display: flex;
align-items: center;
`;
const WrapperArrowBack = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid #B1AFAD 1px;
border-radius: 2rem;
height: fit-content;
cursor: pointer;
&:hover{
    fill: #D45B30;
}
`;
const IconArrowBackStyled = styled(ArrowBack)`
    &:hover {
        fill:#D45B30 ;
    } 
    width: 35px;
    height: 35px;
`
const IconArrowNextStyled = styled(ArrowNext)`
    &:hover {
        fill:#D45B30 ;
    } 
    width: 35px;
    height: 35px;
`

const WarpperDotDivs = styled.div`
display: flex;
margin-top: 1.5rem;
gap:3rem;
align-items: center;
align-content: center;
text-align: center;
justify-content: center;
font-size: 3.5rem;
color:#D45B30 ;
font-weight: bold;
`;

