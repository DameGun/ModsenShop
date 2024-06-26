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
        
    }
    
    body {
        background-color: ${(props) => props.theme.colors.mainColors.white};
        width: 100vw;
        overflow-x: hidden;

        &:has(.block-overflow) {
            overflow-y: hidden;
        }
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
