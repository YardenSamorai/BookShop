import React from 'react'
import Brand1 from '../assets/images/brand1.png';
import Brand2 from '../assets/images/brand2.png';
import Brand3 from '../assets/images/brand3.png';
import Brand4 from '../assets/images/brand4.png';
import Brand5 from '../assets/images/brand5.png';
import styled from 'styled-components';

const brandIcons = [Brand1, Brand2,Brand3,Brand4,Brand5]

const RecomendedSection = () => {
    return (
        <WrapperRecomendedSection>
            {brandIcons.map((brand, index) => {
                return (
                    <div id={index} >
                        <img src={brand} />
                    </div>
                )
            })}
        </WrapperRecomendedSection>
    )
}

export default RecomendedSection

const WrapperRecomendedSection = styled.div`
display: flex;
align-items: center;
background-color: #EDEBE7;
height: 8rem;
justify-content: space-evenly
`;