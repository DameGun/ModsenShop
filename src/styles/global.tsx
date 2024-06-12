import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export default createGlobalStyle`
    ${fonts}
    
    body {
        background-color: ${(props) => props.theme.colors.mainColors.white};
        margin: 0;
        padding: 0;
        font-family: 'DM Sans';
    }

    a, li, body {
        text-decoration: none;
        color: ${(props) => props.theme.colors.mainColors.black}
    }

    #root {
        display: flex;
        flex: 1;
        flex-grow: 1;
        flex-direction: column;
        justify-self: center;
        max-width: 85%;
        height: 100%;
        margin: 0 auto;
    }

    @media ${(props) => props.theme.media.mobile} {
        #root {
            max-width: 95%;
        }
    }
`;
