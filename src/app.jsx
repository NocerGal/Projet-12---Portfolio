import Header from './components/header/Header';

import Infos from './components/Infos/Infos';
import Presentation from './components/presentation/Presentation';

export function App() {
  return (
    <>
      <Header alt="logo" />
      <main>
        <Infos
          github="https://github.com/NocerGal"
          alt="Photo de Schenherr Luc"
        />
        <Presentation />
      </main>
    </>
  );
}
