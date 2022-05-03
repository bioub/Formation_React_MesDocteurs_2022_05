import './index.css';
import { StrictMode } from 'react';

// Jusqu'à React 17
// import ReactDOM from 'react-dom';
// Depuis React 18
import { createRoot } from 'react-dom/client';

import App from './App';

// Jusqu'à React 17
// ReactDOM.render(<App />, document.getElementById('root'));

// Depuis React 18
const root = createRoot(document.getElementById('root'));

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
);


console.log(process.env.REACT_APP_BACKEND_URL);