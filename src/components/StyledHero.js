import styled from 'styled-components'
import defaultImg from '../images/details-4.jpeg'

const SimpleHero = styled.button `
    min-height: calc(60vh);
    width: 80vw;
    background: 
    url(${props => props.img? props.img : defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export default SimpleHero;