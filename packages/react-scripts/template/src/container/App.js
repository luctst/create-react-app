import React from 'react';
import logo from '../assets/img/logo.svg';
import styled, {keyframes} from "styled-components";

const AppLogoAnim = keyframes`
	@keyframes App-logo-spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
	}
`;

const Wrapper = styled.div`
		text-align: center;

			header {
				background-color: #282c34;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: calc(10px + 2vmin);
				color: white;

					img {
						animation: ${AppLogoAnim} infinite 20s linear;
						height: 40vmin;
						pointer-events: none;
					}

					code {
						font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
					}

					a {
  					color: #61dafb;
					}
			}
`;

function App() {
  return (
    <Wrapper as="div">
      <header>
        <img src={logo} alt="logo"/>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p>Check the <code>Start coding</code> section on your <code>README.md</code> file to get more information's.</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </Wrapper>
  );
}

export default App;
