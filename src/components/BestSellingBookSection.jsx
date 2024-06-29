import React from 'react'
import { ReactComponent as Line } from '../assets/icons/line1.svg'
import BestSelling from '../assets/images/sellingBook.png'
import styled from 'styled-components'

const BestSellingBookSection = () => {
    return (
        <WrapperBestSelling>
            <LeftBestSelling>
                <img src={BestSelling} />
            </LeftBestSelling>

            <RightBestSelling>
                <TitleBestSelling>
                    Best Selling Book
                </TitleBestSelling>
                <LineBestSelling />
                <BestSellingAuther>
                    BY TIMBUR HOOD
                </BestSellingAuther>
                <BestSellingBookName>
                    Birds Gonna Be Happy
                </BestSellingBookName>
                <BestSellingBookDesc>
                    Lorem Ipsum dolor sit ament, consectetur adipiscing elit. sed eu feugiat amet, libero ipsum enim pharetrahac
                    Lorem Ipsum dolor sit ament, consectetur adipiscing elit. sed eu feugiat amet, libero ipsum enim pharetrahac
                    Lorem Ipsum dolor sit ament, consectetur adipiscing elit. sed eu feugiat amet, libero ipsum enim pharetrahac
                </BestSellingBookDesc>
                <BestSellingBookPrice>
                    45.00$
                </BestSellingBookPrice>
                <ShopItButton onClick={() => {
                    console.log("The Button just Got Clicked, i need to added to shopping cart now !");
                }}>
                    Shop it Now
                </ShopItButton>

            </RightBestSelling>
        </WrapperBestSelling>
    )
}

export default BestSellingBookSection

const WrapperBestSelling = styled.div`
display: flex;
margin-top: 7rem;
flex-direction: c;
`;

const LeftBestSelling = styled.div`
/* border:solid 2px black; */
width:50%;
display: flex;
justify-content: space-around;
`;

const RightBestSelling = styled.div`
width:50%;
height: 50rem;
flex-direction: column;

`;

const TitleBestSelling = styled.div`
  font-family: "Prata", serif;
  font-size: 5.5rem;
  margin-top: 5rem;
`;

const LineBestSelling = styled(Line)`
margin-top: 1rem;
`;

const BestSellingAuther = styled.div`
margin-top: 4rem;
font-family: "Plus Jakarta Sans", sans-serif;
font-size: .95rem;
color: #8E9196;
font-weight: bold
`;

const BestSellingBookName = styled.div`
font-size: 3.5rem;
margin-top: 4rem;

`;

const BestSellingBookDesc = styled.div`
margin-top: 2rem;
font-size: 1.4rem;
font-family: "Plus Jakarta Sans", sans-serif;
color: #8E9196;
`;

const BestSellingBookPrice = styled.div`
margin-top: 4rem;
font-size: 1.4rem;
font-family: "Prata", serif;
color: #D45B30;
`;

const ShopItButton = styled.button`
height: 4rem;
width: 10rem;
margin-top: 3rem;
background-color: transparent;
font-size: 1rem;
border: solid 1px black; 
border-radius:4px;
text-transform: uppercase;
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
