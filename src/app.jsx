import Header from './components/header/Header';

import Logo from './assets/1.png';
import Home from './components/home/Home';
import Picture from './assets/photoLuc.jpeg';

export function App() {
  return (
    <>
      <Header logo={Logo} alt="logo" />
      <main>
        <Home picture={Picture} alt="Photo de Schenherr Luc" />
      </main>
    </>
  );
}
