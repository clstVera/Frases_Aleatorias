import styled from 'styled-components'

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

const MainContainer = styled.div`
    height: 100vh;
    background-color: #16a085;
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuoteContainer = styled.div`
    border-radius: 3px;
    width: 550px;
    padding: 50px;
    height: auto;
    font-weight: 400;
    background-color: #fff;
    text-align: center;    
    `

const QuoteText = styled.p`
    font-size: 1.75em;
    `

const QuoteAuthor = styled.p`
    font-size: 1em;
    text-align: right;
    `

const QuoteButtons = styled.div`
    height: 30px;
    margin: auto;
    margin-top: 30px;
    display: block;
    box-sizing: content-box;
    `

const QuoteButton = styled.a`
    padding: 0;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #16a085;
    font-size: 1.4em;     
    opacity: 1;
    cursor: pointer;
    float: left;
    margin-right: 5px;
    :hover {
        color: #fff;
    }
    `

const NewQuoteButton = styled.div`
padding: 8px 18px;
border-radius: 3px;
color: #fff;
float: right;    
`
export { colors, MainContainer, QuoteContainer, QuoteText, QuoteAuthor, QuoteButtons, QuoteButton, NewQuoteButton };
