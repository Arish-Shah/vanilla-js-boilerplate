import Header from './components/Header';
import './scss/main.scss';

const app = () => {
  const root = document.getElementById('root');
  root.appendChild(Header());
};

app();
