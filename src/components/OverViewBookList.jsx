import React, { useState } from 'react'
import styled from "styled-components";
import BookImage from '../assets/images/headerBook1.png'
import BookImage2 from '../assets/images/headerBook2.png'
import BookImage3 from '../assets/images/headerBook3.png'
import { ReactComponent as ArrowNext } from '../assets/icons/arrow_next.svg'
import { ReactComponent as ArrowBack } from '../assets/icons/arrow_back.svg'
import { motion, AnimatePresence } from "framer-motion"

const OverViewBookList = () => {


    const [index, setIndex] = useState(0);
    const [booksArray, setBooksArray] = useState([{
        name: "Life Of The Wild",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: BookImage,


    },
    {
        name: "Simple Way Of Piece Life",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: BookImage2,


    },
    {
        name: "Great Travel At Desert",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: BookImage3,

    },
    ])


  return (
    <FullPage>
    <WrapperArrowBack>
        <IconArrowBackStyled onClick={() => {
            setIndex((prev) => {
                if (index === 0) {
                   return booksArray.length - 1
                } else {
                   return prev - 1;
                }
            })
        }} />
    </WrapperArrowBack>
    <AnimatePresence>
        <motion.div
            key={index}  // This key must update to a new value on navigation
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.0 }}
            style={{ display: "flex", width: "100%",}}
            
        >
            <LeftSide>

                <TitleLeft>{booksArray[index].name}</TitleLeft>
                <DescLeft>{booksArray[index].desc}</DescLeft>
                <LeftButton>LEARN MORE</LeftButton>
            </LeftSide>


            <RightSide>
                <img src={booksArray[index].img} style={{ width: "30rem", height: "40rem" }} />
            </RightSide>
        </motion.div>
    </AnimatePresence>
    <WrapperArrowBack>
        <IconArrowNextStyled onClick={() => {
            setIndex((prev) => {
                if (index === booksArray.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            })
        }} />
    </WrapperArrowBack>

</FullPage>
  )
}

export default OverViewBookList

const LeftSide = styled.div`
width: 50%;
margin:3rem;
padding: 2rem;
`;
const RightSide = styled.div`
width: 50%;
margin:3rem;
display: flex;
justify-content: center;
`;

const FullPage = styled.div`
display: flex;
flex-direction: row;
margin: 2.5rem;
align-items: center;

`;

const TitleLeft = styled.h1`
font-size: 5rem;
font-family: "Prata", serif;
font-optical-sizing: auto;
font-style: normal;

`;

const DescLeft = styled.h4`
color:#B1AFAD;
font-size: 1.5rem;
margin-top:6rem ;
font-family: "Plus Jakarta Sans", sans-serif;
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

const LeftButton = styled.button`
height: 4rem;
width: 10rem;
margin-top: 5rem;
background-color: transparent;
font-size: 1rem;
border: solid 1px black; 
border-radius:4px;
	border:1px solid #080808;
	cursor:pointer;
	color:#000000;
	font-family:Arial; 
	text-decoration:none;
    background: linear-gradient(to right, #D45B30 0%, #df5725 50%, #ffffff 50%, #ffffff 100%);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position 0.3s;

    &:hover{
        background-position:0 0;
    }
`;

const IconArrowNextStyled = styled(ArrowNext)`
    &:hover {
        fill:#D45B30 ;
    } 
    width: 40px;
    height: 40px;
`
const IconArrowBackStyled = styled(ArrowBack)`
    &:hover {
        fill:#D45B30 ;
    } 
    width: 40px;
    height: 40px;
`