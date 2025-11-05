import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Provider from './lib/provider.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <GlobalStyle />
    <App />
  </Provider>,
);
