import ReactDOM from 'react-dom/client'; // для преобразования в HTML
import './dist/style.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import 'macro-css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
