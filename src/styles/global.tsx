import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export default createGlobalStyle`
    ${fonts}

    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${(props) => props.theme.colors.mainColors.white};
        font-family: 'DM Sans';
    }

    a, li, body {
        text-decoration: none;
        color: ${(props) => props.theme.colors.mainColors.black}
    }

    #root {
        display: flex;
        flex-direction: column;
        max-width: 75%;
        margin: 0 auto;
    }

    @media ${(props) => props.theme.media.mobile} {
        #root {
            max-width: 95%;
        }
    }
`;
