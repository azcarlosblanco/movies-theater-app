import React from 'react'
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import { ThemeProvider } from 'styled-components'
import { Provider as GridProvider } from 'griding'
import GlobalStyle from './components/GlobalStyle'
import * as theme from './utils/theme'
import App from './App'
import * as serviceWorker from './serviceWorker';


const Wrapper = () => (
	<ThemeProvider theme={theme}>
		<GridProvider columns={theme.columns}>
			<GlobalStyle/>
			<App/>
		</GridProvider>
	</ThemeProvider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
