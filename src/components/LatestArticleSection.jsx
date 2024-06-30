import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styled from 'styled-components'
import { ReactComponent as Line } from '../assets/icons/line1.svg'


const LatestArticleSection = (props) => {

    let data = props.data


  return (
    <div style={{marginBottom:"8rem"}}>
    <SubTitle>
        read our articles
    </SubTitle>
    <LatestArticlesTitle >
        <DashLine />
        Latest Articles
        <DashLine />
    </LatestArticlesTitle>
    <LineDiv>
        <Line />
    </LineDiv>

    <ArticelsMainPage>
        {data.map((item) => {
            return (
                <div style={{padding:"10px", margin:"1.5rem"}}>
                    <div style={{ marginTop: "3rem" }}>
                        <img src={item.img} />
                    </div>
                    <ArticlesDate>{item.date}</ArticlesDate>
                    <ArticleTitle>{item.title}</ArticleTitle>
                    <div style={{ border: "solid 1px #B1AFAD", marginTop: "2rem"}}></div>
                    <InspirationSection>
                        inspiration
                        <InspIcon>
                            <FaFacebook />
                            <FaInstagram />
                            <FaXTwitter />
                        </InspIcon>
                    </InspirationSection>

                </div>
                
            )
        })}
    </ArticelsMainPage>
    <WrapperButton>
    <ShopItButton>READ ALL ARTICLES </ShopItButton>
    </WrapperButton>


</div>
  )
}

export default LatestArticleSection

const SubTitle = styled.div`
text-align: center;
color:#B1AFAD;
margin-top: 10rem;
margin-bottom: 2rem;
font-size: 1.2rem;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform: uppercase;
`;

const LatestArticlesTitle = styled.div`
display: flex;
justify-content: space-between;
font-family: "Prata", serif !important;
font-size: 4.5rem;
align-items: center;
margin-bottom: 1.5rem;
`;

const DashLine = styled.div`
width: 35%;
border: solid 1px #EDEBE7;
margin-left: 2rem;
margin-right: 2rem;
`;

const LineDiv = styled.div`
display: flex;
align-items:center ;
justify-content: center;
position: center;
margin-top: 2rem;

`;

const ArticelsMainPage = styled.div`
display: flex;
justify-content: center;
`;

const ArticlesDate = styled.div`
margin-top: 1.5rem;
font-size: 1.08rem;
font-family: "Prata", serif;
color:#D45B30 ;
`;

const ArticleTitle = styled.div`
    font-size: 1.7rem;
    font-family: "Prata", serif;
`;

const InspirationSection = styled.div`
color:#B1AFAD;
margin-top:1.5rem ;
font-size: 0.9rem;
text-transform: uppercase;
font-family: "Plus Jakarta Sans", sans-serif;
font-weight:bold;
display: flex;
justify-content: space-between;
`;

const InspIcon = styled.div`
gap:1.5rem;
display: flex;
`;


const ShopItButton = styled.button`
height: 3rem;
width: 15rem;
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

const WrapperButton = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
`;