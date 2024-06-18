import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export default createGlobalStyle`
    ${fonts}

    * {
        margin: 0;
        padding: 0;
        font-family: 'DM Sans';
    }

    html {
        overflow-x: hidden;
        margin-right: calc(-1 * (100vw - 100%))
    }
    
    body {
        background-color: ${(props) => props.theme.colors.mainColors.white};
    }

    a, li, body {
        text-decoration: none;
        color: ${(props) => props.theme.colors.mainColors.black}
    }

    #root {
        display: flex;
        flex-direction: column;
        max-width: 75%;
        min-height: 100vh;
        margin: 0 auto;
        
    }

    @media ${(props) => props.theme.media.mobile} {
        #root {
            max-width: 95%;
            margin: 0 auto;
        }
    }
`;
