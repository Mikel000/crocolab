import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchContainer = styled.div`
    position: relative;
    width: 535px;
    height: 48px;
    background : #e6e3e3;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease; 
    right : -120px; 
`;

const SearchInput = styled.input`
    padding-left: 30px;
    font: italic small-caps 16px/2 cursive;  
    position: absolute;
    top: 0;
    left: 0;
    height: 90%;
    width: 93.5%;
    background-color: transparent;
    outline: none;
    font-size: 25px;
    border: 2px solid transparent;
    
    &:focus{
        border-color: rgba(0,0,0,1);
}
    
`;

const IconButton = styled.button`
    position: relative;
    height: 36px;
    width: 36 px; 
    border: none;
    z-index: 1;
    cursor: pointer; 
    background: none; 

    &:hover{
        color: white; 
        &::after{
            opacity: 1px;
            transform: scale (1);
        }
    }
    &::after{
        content:""
        position: absolute;
        top: 0; 
        left: 0;
        height: 100%
        border-radius: 50%
        z-index:-1;
        background: #000;
        transition: 0.2s ease;
        transform: scale(0.6)
        opacity: 0; 
        
    }

`;
export default function Searchbar() {
    return <SearchContainer>
                <IconButton>
            <AiOutlineSearch size= {25}/>
                </IconButton>
        <SearchInput placeholder='Enter material reference'  />
            </SearchContainer>
}