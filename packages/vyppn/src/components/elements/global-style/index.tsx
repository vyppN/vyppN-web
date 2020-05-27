import {createGlobalStyle} from 'styled-components'
import {APP_BACKGROUND_COLOR} from '../../constants/colors'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
}

body{
padding: 0;
margin: 0;
background-color: ${APP_BACKGROUND_COLOR};
font-family: 'Montserrat',sans-serif;
}
`
export default GlobalStyle
