import React from 'react'
import {ReactComponent as Line} from '../assets/icons/line1.svg'
import styled from 'styled-components'

const QuoteSectionPage = () => {
    return (
        <QuoteSectionpage>
            <QuoteTitle>
                Quote Of The Day
                <QuoteLine />
                <QuoteDesc>
                    "The More that you read, the more things you will know. The more that you learn, the more places you'll go."
                    <br />Dr.Seuss
                </QuoteDesc>
            </QuoteTitle>
        </QuoteSectionpage>
    )
}

export default QuoteSectionPage

const QuoteSectionpage = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content: center;
background-color: #ECEAE6;
margin-top: 3rem;
height: 40rem;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.1);

`;

const QuoteTitle = styled.div`
  font-family: "Prata", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;
`;

const QuoteLine = styled(Line)`
margin-top: 3rem;
`;

const QuoteDesc = styled.div`
width: 60%;
font-size: 1.9rem;
margin-top: 5.5rem;
color:#9EA4A7;
line-height: 4rem;
text-align: center;
`;
