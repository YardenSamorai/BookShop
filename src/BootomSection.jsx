import React from 'react'
import styled from 'styled-components'

const BootomSection = () => {
    return (
        <div style={{backgroundColor:"#ECEAE6"}}>
        <WrapperBottomSection>
            <div>
                <ul>
                    <Title>About Us</Title>
                    <LiItem>Vision</LiItem>
                    <LiItem>Articles</LiItem>
                    <LiItem>Careers</LiItem>
                    <LiItem>Service Terms</LiItem>
                    <LiItem>Donate</LiItem>

                </ul>
            </div>
            <ul>
                <Title>Discover</Title>
                <LiItem>Home</LiItem>
                <LiItem>Articles</LiItem>
                <LiItem>Books</LiItem>
                <LiItem>Authors</LiItem>
                <LiItem>Subjects</LiItem>
                <LiItem>Advanced Search</LiItem>
            </ul>
            <div>
                <ul>
                    <Title>My Account</Title>
                    <LiItem>Sign In</LiItem>
                    <LiItem>Articles</LiItem>
                    <LiItem>View Cart</LiItem>
                    <LiItem>My Wishlist</LiItem>
                    <LiItem>Track My Order</LiItem>
                </ul>
            </div>
            <ul>
                <Title>Helps</Title>
                <LiItem>Help Center</LiItem>
                <LiItem>Report A Problem</LiItem>
                <LiItem>View Cart</LiItem>
                <LiItem>Suggesting Edits</LiItem>
                <LiItem>Contact Us</LiItem>
            </ul>

        </WrapperBottomSection>
            <BotomLine />

            <Allright>© 2024 Samorai.All rights reserved</Allright>
        </div>
    )
}

export default BootomSection

const WrapperBottomSection = styled.div`
display: flex;
justify-content: space-around;
background-color: #ECEAE6;
font-size: 1.0rem;

`;

const Title = styled.div`
font-size: 1.5rem;
margin-bottom: 1.5rem;
font-family: "Prata", serif;
`;

const LiItem = styled.li`
list-style-type: none;
margin: .5rem;
font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
color:#B1AFAD;
`;

const BotomLine = styled.div`
width: 100%;
border: 1px solid #B1AFAD;;
`;

const Allright = styled.div`
font-family: "Plus Jakarta Sans", sans-serif;
color:#B1AFAD;
font-size: .9rem;
margin-top: 2rem;
font-weight: bold;
`;