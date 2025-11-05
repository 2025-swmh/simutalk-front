import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      *, body {
        font-family:
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background: inherit;
        cursor: pointer;
      }

      input {
        border: none;
        outline: none;
        background: inherit;
      }

      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }
    `}
  />
);

export default GlobalStyle;
