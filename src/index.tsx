import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import GlobalStyle from './styles/global'
import {ThemeProvider} from 'styled-components'

interface Itheme {
    colors: {
        primary: string
        secondary: string
    }
    media: {
        phone: string
        tablet: string
    }
}

const theme: Itheme = {
    colors: {
        primary: 'limegreen',
        secondary: 'blue',
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)',
    }
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

