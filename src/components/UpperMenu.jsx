import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Person } from '../assets/icons/person_icon.svg';
import { ReactComponent as ShoppingIcon } from '../assets/icons/shopping_icon.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search_icon.svg';


// Todo Implement logic of navigton by URL.
const UpperMenu = () => {

    const [topMenu, setTopMenu] = useState([{
        name: "HOME",
        url: ""
    },
    {
        name: "ABOUT",
        url: ""
    },
    {
        name: "PAGES",
        url: ""
    },
    {
        name: "SHOPE",
        url: ""
    },
    {
        name: "CONTACT",
        url: ""
    }
    ])

    return (
        <WrapperUpperMenuStyle>
            <UpperMenuStyle>
            {topMenu.map(page => {
                return (
                    <Item style={{}} onClick={() => {
                        console.log(page.name, page.url)
                    }}>{page.name}</Item>
                )
            })}
            </UpperMenuStyle>

            <UpperMenuStyleIcons>
                <Person style={{ fill: "#A6ADBA",}} /> <ShoppingIcon style={{ fill: "#A6ADBA" }} /> <SearchIcon style={{ fill: "#A6ADBA" }} />
            </UpperMenuStyleIcons>
        </WrapperUpperMenuStyle>
    )
}

export default UpperMenu

const UpperMenuStyle = styled.div`
    display:flex;
    gap: 2.5rem;
    justify-content: center;
    font-size: 1.4rem;
    font-family: "Bebas Neue", sans-serif;
    color:#A6ADBA;
    width: 90%;
    cursor: pointer;
`;

const WrapperUpperMenuStyle = styled.div`
    display:flex;
    gap: 2rem;
    font-size: 1.2rem;
    font-family: "Plus Jakarta Sans", sans-serif;
    color:#A6ADBA;
    height: 3.5rem;
    align-items:center ;
`;

const UpperMenuStyleIcons = styled.div`
    display: flex;
    gap:1.2rem;
    justify-content: end;

`;
const Item = styled.div`
    &:active {
        color:#D45B30;
    }
`;