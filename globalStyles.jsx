import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
		user-select: none;
}

html {       
font-size: 62.5%; 
}

body {       
font-size: 1.6rem;
}

body, html, #root{
	height: 100%;
	padding: 0;
	margin: 0;
}
`;
