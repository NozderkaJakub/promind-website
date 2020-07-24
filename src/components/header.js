import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const Background = styled.div`
    {
        background: white;
        height: 40px;
        box-shadow: 0 0 1em black;
    }
`;

const StyledUl = styled.ul`
    {
        list-style: none;
        float: right;
    }
`;

const StyledLi = styled.li`
    {
        display: inline-block;
        margin-right: 1rem;
    }
`;

const HomeLink = styled(Link)`
    {
        text-shadow: none;
        background-image: none;
    }
`;

const StyledH3 = styled.h3`
    {
        display: inline;
    }
`;

const SiteName = ({ siteName }) => {
    return (
        <HomeLink to="/">
            <StyledH3>{siteName}</StyledH3>
        </HomeLink>
    );
};

const ListLink = ({ to, name }) => {
    return (
        <StyledLi>
            <Link to={to}>{name}</Link>
        </StyledLi>
    );
};

const Header = ({ siteName }) => {
    return (
        <>
            <Background>
                <SiteName siteName={siteName}/>
                <StyledUl>
                    <ListLink to='/about/' name='O nas' />
                    <ListLink to='/contact/' name='Kontakt' />
                </StyledUl>
            </Background>
        </>
    );
};

export default Header;