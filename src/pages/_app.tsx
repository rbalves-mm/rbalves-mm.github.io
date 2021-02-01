import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import GlobalStyle from '../styles/global';
import "tailwindcss/tailwind.css";
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
